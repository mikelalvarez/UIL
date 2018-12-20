
var kartaSorta = ["baloia", "baloia", "hockey", "hockey", "rugby", "rugby", "tenis", "tenis", "eskubaloia", "eskubaloia", "basket", "basket"];
var markagailuJ1, markagailuJ2;
var txanda = ["J1", "J2"];
var kokatuta =[];
var k = 12;
var biratua1 = "";
var biratua2 = "";
var biratutakoID1 = "";
var biratutakoID2 = "";
var delayInMilliseconds = 1000;

function hasiJolasa(){
	markagailuJ1 = +0;
	markagailuJ2 = +0;
	document.getElementById("mJ1").innerHTML = markagailuJ1;
	document.getElementById("mJ2").innerHTML = markagailuJ2;
	kartakBanatu();
}

function kartakBanatu(){
	var u;
	for (var i = 0; i <= 11; i++) {
		u = Math.floor(Math.random() * k);
		kokatuta.push(kartaSorta[u]);
		kartaSorta.splice(u, 1);
		k = k-1;
	}
}

function biratu(element){

	element.src = "irudiak/" + kokatuta[element.id] + ".png";
	if (biratua1 == "") {
			biratua1 = kokatuta[element.id];
			biratutakoID1 = element.id;
		} else {
			biratua2 = kokatuta[element.id];
			biratutakoID2 = element.id;
			konparatu();
		}
	}

function konparatu() {
	if(biratua1 == biratua2){
		markagailuJ1++;
		document.getElementById("mJ1").innerHTML = markagailuJ1;
	} else {
		markagailuJ1--;
		biratua1 = "";
		biratua2 = "";
		//setTimeout(function() {
		document.getElementById("mJ1").innerHTML = markagailuJ1;
		document.getElementById(biratutakoID1).src = "irudiak/galderaIkurra.jpg"
		document.getElementById(biratutakoID2).src = "irudiak/galderaIkurra.jpg"

	//}, delayInMilliseconds);
	biratutakoID1 = "";
	biratutakoID2 = "";
	}
}


function desberdin(){
}
function berdin(){
}
function txandaPasa(){
}
