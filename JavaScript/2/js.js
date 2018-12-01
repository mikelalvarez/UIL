var xh = +0;  //X handiagoa
var bb = +0;  //Biak berdin
var yh = +0;  //Y handiagoa

function zenbakia(){
  var x = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  var y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  var a = (+xh + +yh + +bb);
  var b = (+xh/+a);
  var c = (+bb/+a);
  var d = (+yh/+a);
  document.getElementById('zenbakia1').innerHTML = y;
  document.getElementById('zenbakia2').innerHTML = x;
  if (y > x) {
    xh += 1;
    document.getElementById('portzentaia1').innerHTML = (xh + " alditan izan da handiagoa 1.zenbakia");
    document.getElementById('portzentaia3').innerHTML = (bb + " alditan izan dira bi zenbakiak berdin");
    document.getElementById('portzentaia2').innerHTML = (yh + " alditan izan da handiagoa 2.zenbakia");

    document.getElementById('b').innerHTML = ((b*100) + "%" + " izango da lehenengo zenbakia handiena");
    document.getElementById('d').innerHTML = ((d*100) + "%" + " izango da bi zenbakiak batera");
    document.getElementById('c').innerHTML = ((c*100) + "%" + " izango da bigarren zenbakia handiena");

    document.getElementById('erantzuna').innerHTML = ("Lehenengo zenbakia bigarrena baino handiagoa da!");
  } else if (y == x) {
    bb += 1;
    document.getElementById('portzentaia1').innerHTML = (xh + " alditan izan da handiagoa 1.zenbakia");
    document.getElementById('portzentaia3').innerHTML = (bb + " alditan izan dira bi zenbakiak berdin");
    document.getElementById('portzentaia2').innerHTML = (yh + " alditan izan da handiagoa 2.zenbakia");

    document.getElementById('b').innerHTML = ((b*100) + "%" + " izango da lehenengo zenbakia handiena");
    document.getElementById('c').innerHTML = ((c*100) + "%" + " izango da bigarren zenbakia handiena");
    document.getElementById('d').innerHTML = ((d*100) + "%" + " izango da bi zenbakiak batera");

    document.getElementById('erantzuna').innerHTML = ("Bi zenbakiak berdinak dira!");
  } else {
    yh += 1;
    document.getElementById('portzentaia1').innerHTML = (xh + " alditan izan da handiagoa 1.zenbakia");
    document.getElementById('portzentaia3').innerHTML = (bb + " alditan izan dira bi zenbakiak berdin");
    document.getElementById('portzentaia2').innerHTML = (yh + " alditan izan da handiagoa 2.zenbakia");

    document.getElementById('b').innerHTML = ((b*100) + "%" + " izango da lehenengo zenbakia handiena");
    document.getElementById('d').innerHTML = ((d*100) + "%" + " izango da bi zenbakiak batera");
    document.getElementById('c').innerHTML = ((c*100) + "%" + " izango da bigarren zenbakia handiena");

    document.getElementById('erantzuna').innerHTML = ("Bigarren zenbakia lehenengoa baino handiagoa da!");
  }
var e = (+b + +c + +d)*100
document.getElementById('e').innerHTML = (e + "%" + " izango da hiru portzentaien gehiketa");
}
