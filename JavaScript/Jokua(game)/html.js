
function zenbakia(){

  var x = Math.floor(Math.random() * (13 - 0 + 1)) + 0;
  var y = Math.floor(Math.random() * (13 - 0 + 1)) + 0;
  document.getElementById('zenbakia1').innerHTML = x;
  document.getElementById('zenbakia2').innerHTML = y;
  if (y > x) {
    document.getElementById('erantzuna').innerHTML = ("Lehenengo zenbakia bigarrena baino handiagoa da!");
  } else if (y == x) {
      document.getElementById('erantzuna').innerHTML = ("Bi zenbakiak berdinak dira!");
  } else {
      document.getElementById('erantzuna').innerHTML = ("Bigarren zenbakia lehenengoa baino handiagoa da!");
  }
}
