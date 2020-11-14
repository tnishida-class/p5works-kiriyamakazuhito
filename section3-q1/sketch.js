// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
    createCanvas(400, 400);
    background(255);
    balloon(100,150,"I love keyakizaka46",50,150,0);
  }
  
  function balloon(x,y,t,R,G,B){  //引数(左端、上端、テキスト、RGBカラー)
    let w = textWidth(t);
    let h = textAscent() + textDescent();
    let p = 50;
    fill(R,G,B);
    rect(x, y, w + p * 2, h + p * 2);
    rect(x+w+p*2,y+h+p*2-15,40,15)
    fill(255);
    text(t, x+p, y+ p);
  }
  