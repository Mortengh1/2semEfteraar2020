/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');


// function that will fire after click


let runAnimation = function(){
  ufo.classList.add("animate");
  setTimeout(clearClass, 4000);
}

// element.addEventListener("click", myAddClassFunction);
ufo.addEventListener("click", runAnimation);

let clearClass = function(){
  ufo.classList.remove("animate");
}

// setTimeout(myFunction, 3000); 
// 