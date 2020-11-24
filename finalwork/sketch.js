// 最終課題を制作しよう
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 3;
  vy = 3;
  score = 0;
  rx=width/2;
  brickRowCount = 5;
  brickColumnCount = 11;
  brickWidth = 82;
  brickHeight = 20;
  brickPadding = 10;
  brickOffsetTop = 30;
  brickOffsetLeft = 30;
  bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0,status:1 };
    }
}
  
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);
  rect(rx,height-30,100,18);
  drawBricks();
  collisionDetection();
  // 速度＝位置の増分
  x += vx;
  y += vy;

  // 跳ね返り
  if(x < 0 || x > width){ vx = -1 * vx; } // 横
  if(y < 0 ){ vy = -1 * vy; } 
  else if(y>=height){text("GAME OVER",width/2,height/2);
          vx = 0;
          vy = 0;
               }// 縦
  if(x>rx&&x<rx+100&&y>=height-29){vy = -1 * vy;}
  if(rx>width-100){rx=width-100;}
  if(rx<0){rx=0;}
  if(score ==brickRowCount*brickColumnCount) {
                        text("GAME CLEAR",width/2,height/2);
  vx = 0;
  vy = 0;}
  if(y>=height){text("GAME OVER",width/2,height/2);
               }
  // x座標, y座標を画面内にする
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  if(keyIsDown(LEFT_ARROW)){ rx -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ rx += 5; }
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                
                rect(brickX, brickY, brickWidth, brickHeight);
                
            }
        }
    }
}
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    vy = -1 * vy; 
                    b.status = 0;
                    score+=1;
                        
                    
                }
            }
        }
    }
}
