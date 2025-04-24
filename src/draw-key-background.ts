/**
 * 背景鍵盤色（グリッド）を、鍵盤領域オフセット後に描画
 */
export function drawKeyBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  lowestMidi: number,
  highestMidi: number,
  KEYBOARD_WIDTH: number,
): void {
  const WHITE_PCS = new Set<number>([0, 2, 4, 5, 7, 9, 11]);
  const keyCount = highestMidi - lowestMidi + 1;
  const rowHeight = height / keyCount;

  ctx.strokeStyle = '#bbb';
  ctx.lineWidth = 1;

  for (let i = 0; i < keyCount; i++) {
    const midi = highestMidi - i;
    const pc = midi % 12;
    ctx.fillStyle = WHITE_PCS.has(pc) ? '#ffffff' : '#dddddd';

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