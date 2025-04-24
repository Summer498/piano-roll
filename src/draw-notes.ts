// src/draw-notes.ts

export interface Note {
  midi: number;
  start: number;
  duration: number;
}

export function drawNotes(
  ctx: CanvasRenderingContext2D,
  notes: Note[],
  lowestMidi: number,
  highestMidi: number,
  width: number,
  height: number,
  keyboardWidth: number,
  pixelsPerBeat: number
): void {
  const keyCount = highestMidi - lowestMidi + 1;
  const rowHeight = height / keyCount;

  ctx.fillStyle   = '#4caf50';
  ctx.strokeStyle = '#388e3c';
  ctx.lineWidth   = 1;

  for (const note of notes) {
    const index = highestMidi - note.midi;
    const y     = index * rowHeight;
    const x     = keyboardWidth + note.start * pixelsPerBeat;
    const w     = note.duration * pixelsPerBeat;
    const h     = rowHeight;

    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
  }
}
