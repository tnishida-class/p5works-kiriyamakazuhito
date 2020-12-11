// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
// なにかキーを押している時はスピード2倍
let count;
let cycle;
let size ;
let speed ;
function setup(){
  createCanvas(200, 200);
  count = 50;
  cycle = 100;
  
  }
function draw(){
  background(160, 192, 255);
   if (keyIsPressed == true){
  speed = 2;
}else{speed = 1;}
  count = ((count +speed) % cycle);
  size = count +50
  ellipse(width / 2, height / 2, size);
  }