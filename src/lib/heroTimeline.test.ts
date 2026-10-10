import { describe, expect, it } from 'vitest'
import { createTimeline, ERASING_DURATION_MS, HOLD_DURATION_MS, TYPING_DURATION_MS } from './heroTimeline'

const even = () => 0.5 // even gaps between letters

describe('heroTimeline', () => {
  it('starts on the first message, typing, with nothing shown', () => {
    expect(createTimeline([4, 3], even).state).toEqual({ messageIndex: 0, phase: 'typing', lettersShown: 0 })
  })

  it('types one letter per equal gap, finishing exactly on time', () => {
    const timeline = createTimeline([4], even)
    const gap = TYPING_DURATION_MS / 4
    expect(timeline.advance(gap - 1).lettersShown).toBe(0)
    expect(timeline.advance(1).lettersShown).toBe(1)
    expect(timeline.advance(gap * 2).lettersShown).toBe(3)
    expect(timeline.advance(gap)).toEqual({ messageIndex: 0, phase: 'holding', lettersShown: 4 })
  })

  it('jitters letter timing but still ends on time', () => {
    const values = [0, 0.9, 0.1, 0.5]
    let i = 0
    const timeline = createTimeline([4], () => values[i++ % values.length])
    const shown: number[] = []
    for (let t = 0; t < TYPING_DURATION_MS - 10; t += 10) shown.push(timeline.advance(10).lettersShown)
    expect(shown.every((n, j) => j === 0 || n >= shown[j - 1])).toBe(true)
    expect(timeline.state.phase).toBe('typing')
    expect(timeline.advance(10).phase).toBe('holding')
  })

  it('holds for the hold duration, then erases', () => {
    const timeline = createTimeline([2], even)
    timeline.advance(TYPING_DURATION_MS)
    expect(timeline.advance(HOLD_DURATION_MS - 1)).toEqual({ messageIndex: 0, phase: 'holding', lettersShown: 2 })
    expect(timeline.advance(1).phase).toBe('erasing')
  })

  it('erases one letter per equal step, right to left, then moves to the next message', () => {
    const timeline = createTimeline([3, 2], even)
    timeline.advance(TYPING_DURATION_MS)
    timeline.advance(HOLD_DURATION_MS)
    const step = ERASING_DURATION_MS / 3
    expect(timeline.advance(step).lettersShown).toBe(2)
    expect(timeline.advance(step).lettersShown).toBe(1)
    expect(timeline.advance(step)).toEqual({ messageIndex: 1, phase: 'typing', lettersShown: 0 })
  })

  it('wraps back to the first message after the last', () => {
    const timeline = createTimeline([2, 2], even)
    const cycle = [TYPING_DURATION_MS, HOLD_DURATION_MS, ERASING_DURATION_MS]
    cycle.forEach((ms) => timeline.advance(ms))
    expect(timeline.state.messageIndex).toBe(1)
    cycle.forEach((ms) => timeline.advance(ms))
    expect(timeline.state).toEqual({ messageIndex: 0, phase: 'typing', lettersShown: 0 })
  })

  it('never skips a phase, however big the step', () => {
    const timeline = createTimeline([2, 2], even)
    expect(timeline.advance(100000)).toEqual({ messageIndex: 0, phase: 'holding', lettersShown: 2 })
  })

  it('carries frame overshoot into the next phase so the hold ends on time', () => {
    const timeline = createTimeline([2], even)
    timeline.advance(TYPING_DURATION_MS + 15)
    expect(timeline.advance(HOLD_DURATION_MS - 15).phase).toBe('erasing')
  })

  it('does nothing while not advanced, and resumes where it left off', () => {
    const timeline = createTimeline([4], even)
    timeline.advance(1000)
    const paused = timeline.state
    expect(timeline.advance(0)).toBe(paused)
    timeline.advance(TYPING_DURATION_MS - 1000)
    expect(timeline.state.phase).toBe('holding')
  })
})
