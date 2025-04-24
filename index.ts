import { drawPianoKeyboard } from "./src/draw-piano-keyboard"
import { drawKeyBackground } from "./src/draw-key-background"
import { getCanvasElement } from "./src/get-canvas-element"
import { getCtx } from "./src/get-ctx"

function render(): void {
  const KEYBOARD_WIDTH = 60;

  const lowestMidi = 36; // C2
  const highestMidi = 84; // C6
  
  const canvasElement = getCanvasElement();
  const ctx = getCtx(canvasElement)

  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  drawPianoKeyboard(
    ctx,
    canvasElement.height,
    lowestMidi,
    highestMidi,
    KEYBOARD_WIDTH,
  );
  drawKeyBackground(
    ctx,
    canvasElement.width,
    canvasElement.height,
    lowestMidi,
    highestMidi,
    KEYBOARD_WIDTH
  );
}


/**
 * エントリーポイント
 */
function main(): void {
  render();
}

window.addEventListener('DOMContentLoaded', main);
