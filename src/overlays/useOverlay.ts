import { useEffect, useRef } from 'react';

interface Entry {
  dismiss: () => void;
  root: () => HTMLElement | null;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])';

// The one place overlays stack and get dismissed. Escape and Tab reach only
// the topmost open overlay; overlays never add their own window listener for them.
const stack: Entry[] = [];

function trapTab(e: KeyboardEvent, root: HTMLElement) {
  const controls = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
  if (controls.length === 0) {
    e.preventDefault();
    root.focus();
    return;
  }
  const first = controls[0];
  const last = controls[controls.length - 1];
  const active = document.activeElement;
  if (!root.contains(active) || active === root) {
    e.preventDefault();
    (e.shiftKey ? last : first).focus();
  } else if (e.shiftKey && active === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus();
  }
}

function onKeyDown(e: KeyboardEvent) {
  const top = stack[stack.length - 1];
  if (!top) return;
  if (e.key === 'Escape') top.dismiss();
  if (e.key === 'Tab') {
    const root = top.root();
    if (root) trapTab(e, root);
  }
}

function register(entry: Entry) {
  if (stack.length === 0) window.addEventListener('keydown', onKeyDown);
  stack.push(entry);
  return () => {
    stack.splice(stack.indexOf(entry), 1);
    if (stack.length === 0) window.removeEventListener('keydown', onKeyDown);
  };
}

/**
 * Registers an overlay while `open`; Escape calls `onDismiss` if it is the topmost.
 * Attach the returned ref to the overlay root (give it `role="dialog"`, `aria-modal`
 * and `tabIndex={-1}`): focus moves into it on open, Tab stays inside it, and focus
 * returns to the opener on close.
 */
export function useOverlay(open: boolean, onDismiss: () => void) {
  const latest = useRef(onDismiss);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    latest.current = onDismiss;
  });

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    rootRef.current?.focus();
    const unregister = register({ dismiss: () => latest.current(), root: () => rootRef.current });
    return () => {
      unregister();
      opener?.focus();
    };
  }, [open]);

  return rootRef;
}
