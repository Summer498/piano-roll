export function getCtx(
  canvasElement: HTMLCanvasElement
): CanvasRenderingContext2D {
  const ctx = canvasElement.getContext('2d');
  if (ctx === null) {
    throw new Error('Unable to get 2D rendering context');
  }
  return ctx
}
