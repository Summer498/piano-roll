"use strict";

// src/draw-piano-keyboard.ts
function drawPianoKeyboard(ctx, height, lowestMidi, highestMidi, KEYBOARD_WIDTH) {
  const WHITE_PCS = /* @__PURE__ */ new Set([0, 2, 4, 5, 7, 9, 11]);
  const keyCount = highestMidi - lowestMidi + 1;
  const keyHeight = height / keyCount;
  ctx.lineWidth = 1;
  for (let i = 0; i < keyCount; i++) {
    const midi = highestMidi - i;
    const pc = midi % 12;
    if (WHITE_PCS.has(pc)) {
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#000000";
    } else {
      ctx.fillStyle = "#000000";
      ctx.strokeStyle = "#333333";
    }
    ctx.fillRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
    ctx.strokeRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
  }
}

// src/draw-key-background.ts
function drawKeyBackground(ctx, width, height, lowestMidi, highestMidi, KEYBOARD_WIDTH) {
  const WHITE_PCS = /* @__PURE__ */ new Set([0, 2, 4, 5, 7, 9, 11]);
  const keyCount = highestMidi - lowestMidi + 1;
  const rowHeight = height / keyCount;
  ctx.strokeStyle = "#bbb";
  ctx.lineWidth = 1;
  for (let i = 0; i < keyCount; i++) {
    const midi = highestMidi - i;
    const pc = midi % 12;
    ctx.fillStyle = WHITE_PCS.has(pc) ? "#ffffff" : "#dddddd";
    ctx.fillRect(
      KEYBOARD_WIDTH,
      i * rowHeight,
      width - KEYBOARD_WIDTH,
      rowHeight
    );
    ctx.strokeRect(
      KEYBOARD_WIDTH,
      i * rowHeight,
      width - KEYBOARD_WIDTH,
      rowHeight
    );
  }
}

// src/get-canvas-element.ts
function getCanvasElement() {
  const canvasElement = document.getElementById(
    "piano-roll-canvas"
  );
  if (!(canvasElement instanceof HTMLCanvasElement)) {
    throw new Error('Canvas element "piano-roll-canvas" not found');
  }
  return canvasElement;
}

// src/get-ctx.ts
function getCtx(canvasElement) {
  const ctx = canvasElement.getContext("2d");
  if (ctx === null) {
    throw new Error("Unable to get 2D rendering context");
  }
  return ctx;
}

// index.ts
function render() {
  const KEYBOARD_WIDTH = 60;
  const lowestMidi = 36;
  const highestMidi = 84;
  const canvasElement = getCanvasElement();
  const ctx = getCtx(canvasElement);
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  drawPianoKeyboard(
    ctx,
    canvasElement.height,
    lowestMidi,
    highestMidi,
    KEYBOARD_WIDTH
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
function main() {
  render();
}
window.addEventListener("DOMContentLoaded", main);
