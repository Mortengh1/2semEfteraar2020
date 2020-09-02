/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

/**
* Javascript byggeklodser
**/

//Gammeldags metode for var
var magi = "Hokus poks filihankat";
var markup = "<em>";
var markupx = "</em>";

//Mere moderne metode
let citat = ' "Jylland mellem tvende have." ';

//hvis en værdi ikke ændres
const navn = "<br>H.C. Andersen"

document.write(markup + citat + navn + markupx);

//JS kan ogsp regne
let a =2;
let b = 777;
let c = a * b;
console.log(c);


//lister

var cars = ["Saab", "Volvo", "BMW", "Citröen", "tesla", "audi", "mercedes", "rover", "jaguar"];


let husk = [
    "ost",
    "benzin",
    "tjek trafikken inden vi kører"
];

document.write(
    "<p>" +
    husk[0]
    + "</p>"
);

//LOOP
/*

*/
let overskrift = "Bilmærker:";
let markup2 = "<h1>";
let markup3 = "</h1>";

document.write( markup2 + overskrift + markup3 + "<ul id='listen'>" );
for (let i = 0; i <cars.length; i++) {
    document.write( "<li class='orange'>" + cars[i] + "</li>" );
};
document.write( "</ul>" );



/**
* DOM
**/
let anders = document.getElementById("minAside");
//anders.innerHTML = "adfadfdasfd";
anders.style.color = "#fff";
//anders.style.backgroundColor = "blue";

// backgroundColor <====> i CSS skriver man background-color
var kort = [
"images/helloween.jpg", 
"images/greenman.jpg",
"images/marselis.jpg"
];

// loope listen ud

for (let n=0; n < kort.length; n++){
console.log( "<img src='" + kort[n] + "'>");
anders.innerHTML += "<img src='" + kort[n] + "'>";
}

//Funktioner
function regnDenUd (nero, caecer) {
    return nero * caecer;
}

console.log( regnDenUd( 666, 777 ) );
console.log( regnDenUd(2345, 5678) );