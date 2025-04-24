/**
 * ピアノロール背景を描画する
 * - 白鍵の行は白 (#fff)、黒鍵の行は薄グレー (#ddd)
 * @param {CanvasRenderingContext2D} ctx   描画コンテキスト
 * @param {number} width                   キャンバス幅
 * @param {number} height                  キャンバス高さ
 * @param {number} lowestMidi              表示する最下鍵の MIDI 番号（例: 36 = C2）
 * @param {number} highestMidi             表示する最上鍵の MIDI 番号（例: 84 = C6）
 */
function drawKeyBackground(ctx, width, height, lowestMidi, highestMidi) {
  // 0=C,1=C#,2=D, … 11=B のうち白鍵のピッチクラス
  const WHITE_PCS = new Set([0, 2, 4, 5, 7, 9, 11]);

  const keyCount = highestMidi - lowestMidi + 1;
  const rowHeight = height / keyCount;

  ctx.strokeStyle = '#bbb';
  ctx.lineWidth   = 1;
  for (let i = 0; i < keyCount; i++) {
    const midi = highestMidi - i;          // 上から順に描く場合
    const pc   = midi % 12;
    ctx.fillStyle = WHITE_PCS.has(pc) ? '#ffffff' : '#dddddd';
    ctx.fillRect(0, i * rowHeight, width, rowHeight);
    ctx.strokeRect(0, i * rowHeight, width, rowHeight);
  }
}

// main.js の初期化例
const canvas = document.getElementById('piano-roll-canvas');
const ctx    = canvas.getContext('2d');

// キャンバス全体の背景をクリア
ctx.clearRect(0, 0, canvas.width, canvas.height);

// C2(36)〜C6(84) を表示する例
drawKeyBackground(ctx, canvas.width, canvas.height, 36, 84);
