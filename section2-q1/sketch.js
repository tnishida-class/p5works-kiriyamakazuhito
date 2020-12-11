// 小手調べ
function setup(){
  noFill();
  stroke(0,0,255);
  for(let i = 0; i < 10; i++){
    ellipse(50,50,i*5+5);
    if (i == 4)stroke(255,0,0);
  }
}