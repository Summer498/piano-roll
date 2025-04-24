/**
 * 左側にピアノ鍵盤を描画する
 * - 白鍵は白、黒鍵は黒でコントラストをはっきり
 * - 各鍵に縁取り線を描画
 */
export function drawPianoKeyboard(
  ctx: CanvasRenderingContext2D,
  height: number,
  lowestMidi: number,
  highestMidi: number,
  KEYBOARD_WIDTH: number,
): void {
  const WHITE_PCS = new Set<number>([0, 2, 4, 5, 7, 9, 11]);
  const keyCount = highestMidi - lowestMidi + 1;
  const keyHeight = height / keyCount;

  ctx.lineWidth = 1;
  for (let i = 0; i < keyCount; i++) {
    const midi = highestMidi - i;
    const pc = midi % 12;

    if (WHITE_PCS.has(pc)) {
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#000000';
    } else {
      ctx.fillStyle = '#000000';
      ctx.strokeStyle = '#333333';
    }

    ctx.fillRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
    ctx.strokeRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
  }
}
