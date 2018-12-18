
var kartaSorta = ["baloia", "baloia", "hockey", "hockey", "rugby", "rugby", "tenis", "tenis", "eskubaloia", "eskubaloia", "basket", "basket"];
var markagailuJ1, markagailuJ2;
var txanda = ["J1", "J2"];
var kokatuta =[];
var k = 12;
var biratua1 = "";
var biratua2 = "";

function hasiJolasa(){
	markagailuJ1 = 0;
	markagailuJ2 = 0;
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

function biratu(elemnt){
	elemnt.src = "irudiak/" + kokatuta[elemnt.id] + ".png";
	document.getElementById("elementua").innerHTML = kokatuta[elemnt.id];

	if (biratua1=="") {
		biratua1= kokatuta[element.id]
	} else {

	}
}

function desberdin(){



}

function berdin(){

}

function txandaPasa(){

}
