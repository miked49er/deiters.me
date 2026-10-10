export const TYPING_DURATION_MS = 3000
export const HOLD_DURATION_MS = 8000
export const ERASING_DURATION_MS = 1500

export type Phase = 'typing' | 'holding' | 'erasing'

export interface TimelineState {
  messageIndex: number
  phase: Phase
  lettersShown: number
}

export interface Timeline {
  readonly state: TimelineState
  // Move the timeline forward by `ms`. Not advancing is pausing: elapsed time in the phase is kept.
  // Returns the same object when nothing visible changed.
  advance(ms: number): TimelineState
}

const PHASE_DURATION: Record<Phase, number> = {
  typing: TYPING_DURATION_MS,
  holding: HOLD_DURATION_MS,
  erasing: ERASING_DURATION_MS,
}

// Time at which each letter appears: jittered (0.5x to 1.5x) so the typing feels human, scaled to end exactly on time.
function typingSchedule(letters: number, random: () => number): number[] {
  const gaps = Array.from({ length: letters }, () => 0.5 + random())
  const scale = TYPING_DURATION_MS / gaps.reduce((sum, gap) => sum + gap, 0)
  let at = 0
  return gaps.map((gap) => (at += gap * scale))
}

// Backspacing is quick and steady: one letter every equal step.
const erasingSchedule = (letters: number): number[] =>
  Array.from({ length: letters }, (_, i) => ((i + 1) * ERASING_DURATION_MS) / letters)

// `letterCounts[i]` is how many keystrokes message i takes. Messages rotate in order, forever.
export function createTimeline(letterCounts: number[], random: () => number = Math.random): Timeline {
  let state: TimelineState = { messageIndex: 0, phase: 'typing', lettersShown: 0 }
  let elapsed = 0
  let typing = typingSchedule(letterCounts[0], random)

  const lettersAt = (): number => {
    const letters = letterCounts[state.messageIndex]
    if (state.phase === 'holding') return letters
    const schedule = state.phase === 'typing' ? typing : erasingSchedule(letters)
    let count = 0
    while (count < schedule.length && schedule[count] <= elapsed) count++
    return state.phase === 'typing' ? count : letters - count
  }

  const nextPhase = (): TimelineState => {
    const { messageIndex, phase } = state
    if (phase === 'typing') return { messageIndex, phase: 'holding', lettersShown: letterCounts[messageIndex] }
    if (phase === 'holding') return { messageIndex, phase: 'erasing', lettersShown: letterCounts[messageIndex] }
    const next = (messageIndex + 1) % letterCounts.length
    typing = typingSchedule(letterCounts[next], random)
    return { messageIndex: next, phase: 'typing', lettersShown: 0 }
  }

  return {
    get state() {
      return state
    },
    advance(ms) {
      const before = state
      elapsed += ms
      // A phase always lasts its full duration: a slow frame never skips ahead into the next phase.
      if (elapsed >= PHASE_DURATION[state.phase]) {
        elapsed = 0
        state = nextPhase()
      }
      const lettersShown = lettersAt()
      if (lettersShown !== state.lettersShown) state = { ...state, lettersShown }
      if (state.messageIndex === before.messageIndex && state.phase === before.phase && state.lettersShown === before.lettersShown) {
        state = before
      }
      return state
    },
  }
}
