// main.js

// ピアノ鍵盤領域の幅を定義
const KEYBOARD_WIDTH = 60;

/**
 * 左側にピアノ鍵盤を描画する
 * - 白鍵は白、黒鍵は黒でコントラストをはっきり
 * - 各鍵に縁取り線を描画
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} height      キャンバス高さ
 * @param {number} lowestMidi  表示する最下鍵の MIDI 番号
 * @param {number} highestMidi 表示する最上鍵の MIDI 番号
 */
function drawPianoKeyboard(ctx, height, lowestMidi, highestMidi) {
  const WHITE_PCS = new Set([0, 2, 4, 5, 7, 9, 11]);
  const keyCount  = highestMidi - lowestMidi + 1;
  const keyHeight = height / keyCount;

  ctx.lineWidth   = 1;

    ctx.fillRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
    ctx.strokeRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
  for (let i = 0; i < keyCount; i++) {
    const midi = highestMidi - i;
    const pc   = midi % 12;

    if (WHITE_PCS.has(pc)) {
      ctx.fillStyle   = '#ffffff';
      ctx.strokeStyle = '#000000';
    } else {
      ctx.fillStyle   = '#000000';
      ctx.strokeStyle = '#333333';
    }

    ctx.fillRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
    ctx.strokeRect(0, i * keyHeight, KEYBOARD_WIDTH, keyHeight);
  }
}

/**
 * 背景鍵盤色（グリッド）を、鍵盤領域オフセット後に描画
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 * @param {number} lowestMidi
 * @param {number} highestMidi
 */
function drawKeyBackground(ctx, width, height, lowestMidi, highestMidi) {
  const WHITE_PCS = new Set([0, 2, 4, 5, 7, 9, 11]);
  const keyCount  = highestMidi - lowestMidi + 1;
  const rowHeight = height / keyCount;

  ctx.strokeStyle = '#bbb';
  ctx.lineWidth   = 1;

  for (let i = 0; i < keyCount; i++) {
    const midi = highestMidi - i;
    const pc   = midi % 12;
    ctx.fillStyle = WHITE_PCS.has(pc) ? '#fff' : '#ddd';

    ctx.fillRect(KEYBOARD_WIDTH, i * rowHeight, width - KEYBOARD_WIDTH, rowHeight);
    ctx.strokeRect(KEYBOARD_WIDTH, i * rowHeight, width - KEYBOARD_WIDTH, rowHeight);
  }
}

// 初期化例
const canvas = document.getElementById('piano-roll-canvas');
const ctx    = canvas.getContext('2d');
const lowest = 36;  // C2
const highest= 84;  // C6

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPianoKeyboard(ctx, canvas.height, lowest, highest);
  drawKeyBackground(ctx, canvas.width, canvas.height, lowest, highest);
}

render();
