// テキスト「アニメーション」
let x, y, vx, vy,angle = 0,count = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 4;
  vy = 4;
}
function mouseClicked(){
  x = mouseX;
  y = mouseY;
  count = 1; //どこか押すまで星は描画されない
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
  angle += 20;
  if(count == 1){
  star(x,y,24,angle);
    }
  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
  x -= vx;
  y += vy;
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 5; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    theta += angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
