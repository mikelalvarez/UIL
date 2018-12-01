
var img1 = document.createElement("img");
var img2 = document.createElement("img");

function zenbakia(){

  var x = Math.floor(Math.random() * (13 - 1)) + 1;
  var y = Math.floor(Math.random() * (13 - 1)) + 1;
  document.getElementById('zenbakia1').innerHTML = ("🃏 " + x);
  document.getElementById('zenbakia2').innerHTML = ("🃏 " + y);

  if (y > x) {
    document.getElementById('erantzuna').innerHTML = ("Lehenengo zenbakia bigarrena baino handiagoa da!");
  } else if (y == x) {
      document.getElementById('erantzuna').innerHTML = ("Bi zenbakiak berdinak dira!");
  } else {
      document.getElementById('erantzuna').innerHTML = ("Bigarren zenbakia lehenengoa baino handiagoa da!");
  }

if (x == 1) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/200px-Playing_card_heart_A.svg.png");
  document.body.appendChild(img1)
}
if (x == 2) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/200px-Playing_card_heart_2.svg.png");
  document.body.appendChild(img1);
}
if (x == 3) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/200px-Playing_card_heart_3.svg.png");
  document.body.appendChild(img1);
}
if (x == 4) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/200px-Playing_card_heart_4.svg.png");
  document.body.appendChild(img1);
}
if (x == 5) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/200px-Playing_card_heart_5.svg.png");
  document.body.appendChild(img1);
}
if (x == 6) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/200px-Playing_card_heart_6.svg.png");
  document.body.appendChild(img1);
}
if (x == 7) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/200px-Playing_card_heart_7.svg.png");
  document.body.appendChild(img1);
}
if (x == 8) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/200px-Playing_card_heart_8.svg.png");
  document.body.appendChild(img1);
}
if (x == 9) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/200px-Playing_card_heart_9.svg.png");
  document.body.appendChild(img1);
}
if (x == 10) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/200px-Playing_card_heart_10.svg.png");
  document.body.appendChild(img1);
}
if (x == 11) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/200px-Playing_card_heart_J.svg.png");
  document.body.appendChild(img1);
}
if (x == 12) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/200px-Playing_card_heart_Q.svg.png");
  document.body.appendChild(img1);
}
if (x == 13) {
  img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/200px-Playing_card_heart_K.svg.png");
  document.body.appendChild(img1);
}


if(y == 1) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/200px-Playing_card_spade_A.svg.png");
  document.body.appendChild(img2)
}
if (y == 2) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png");
  document.body.appendChild(img2);
}
if (y == 3) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/200px-Playing_card_spade_3.svg.png");
  document.body.appendChild(img2);
}
if (y == 4) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/200px-Playing_card_spade_4.svg.png");
  document.body.appendChild(img2);
}
if (y == 5) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/200px-Playing_card_spade_5.svg.png");
  document.body.appendChild(img2);
}
if (y == 6) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/200px-Playing_card_spade_6.svg.png");
  document.body.appendChild(img2);
}
if (y == 7) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/200px-Playing_card_spade_7.svg.png");
  document.body.appendChild(img2);
}
if (y == 8) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/200px-Playing_card_spade_8.svg.png");
  document.body.appendChild(img2);
}
if (y == 9) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/200px-Playing_card_spade_9.svg.png");
  document.body.appendChild(img2);
}
if (y == 10) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/200px-Playing_card_spade_10.svg.png");
  document.body.appendChild(img2);
}
if (y == 11) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/200px-Playing_card_spade_J.svg.png");
  document.body.appendChild(img2);
}
if (y == 12) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/200px-Playing_card_spade_Q.svg.png");
  document.body.appendChild(img2);
}
if (y == 13) {
  img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/200px-Playing_card_spade_K.svg.png");
  document.body.appendChild(img2);
}
}
