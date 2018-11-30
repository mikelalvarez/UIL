var xh = +0;
var bb = +0;
var yh = +0;

function zenbakia(){
  var a = 1+(+xh + +yh + +bb);
  var b = (+xh/a);
  var c = (+bb/a);
  var d = (+yh/a);
  var x = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  var y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  document.getElementById('zenbakia2').innerHTML = x;
  document.getElementById('zenbakia1').innerHTML = y;
  if (y > x) {
    document.getElementById('erantzuna').innerHTML = ("Lehenengo zenbakia bigarrena baino handiagoa da!");
    xh += 1;
    document.getElementById('portzentaia1').innerHTML = xh;
    document.getElementById('b').innerHTML = b;
  } else if (y == x) {
    document.getElementById('erantzuna').innerHTML = ("Bi zenbakiak berdinak dira!");
    bb += 1;
    document.getElementById('portzentaia3').innerHTML = bb;
    document.getElementById('c').innerHTML = c;
  } else {
    document.getElementById('erantzuna').innerHTML = ("Bigarren zenbakia lehenengoa baino handiagoa da!");
    yh += 1;
    document.getElementById('portzentaia2').innerHTML = yh;
    document.getElementById('d').innerHTML = d;
  }
  var e = +b + +c + +d;
  document.getElementById('e').innerHTML = b;
}
