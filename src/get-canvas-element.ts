export function getCanvasElement(): HTMLCanvasElement {
  const canvasElement = document.getElementById(
    'piano-roll-canvas'
  );
  if (!(canvasElement instanceof HTMLCanvasElement)) {
    throw new Error('Canvas element "piano-roll-canvas" not found');
  }
  return canvasElement
}
