var i = 5;
function formularioa() {
  var pin = prompt("mesedez sartu ezazu zure izena");

while (i != 0) {
  if (pin != "mikel") {

    pin = prompt("mesedez sartu ezazu zure izena");

    i--;

    document.getElementById('demo').innerHTML = i;

  } else {
    alert("sartu zara");
    document.getElementById('button').disabled = true;
      break;
    }
  }
}
