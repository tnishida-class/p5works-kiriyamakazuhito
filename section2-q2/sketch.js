// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(i%2==1&&j%2==1){fill(255,255,255);}
      else if(i%2==0&&j%2==0){fill(255,255,255);}
      else  {fill(125,125,125);}
      rect(i*size,j*size,size,size);
// ここから駒の処理
      if(i%2==1&&j%2==0&&j<3){fill(255,0,0);}
      if(i%2==0&&j%2==1&&j<3){fill(255,0,0);}
      if(i%2==1&&j%2==0&&j>4){fill(0,0,0);}
      if(i%2==0&&j%2==1&&j>4){fill(0,0,0);}
ellipse(i*size+size/2,j*size+size/2,size-3);
    }
  }
}