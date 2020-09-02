/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');
function stars() {
let Many = function (howMany) {

    let h = document.body.clientHeight;
    let w = document.body.clientWidth;

    for (let i = 0; i < howMany; i++) {

        // create elements on the fly

            let newDiv = document.createElement("IMG");
            newDiv.classList.add("red");
            newDiv.setAttribute("src", "images/star.png");
            newDiv.setAttribute("width", "20");
            newDiv.setAttribute("height", "20");
            newDiv.setAttribute("alt", "Star");

            newDiv.style.left = Math.floor(Math.random() * w) + 'px';
            newDiv.style.top = Math.floor(Math.random() * h) + 'px';
            newDiv.style.transform = 'rotate(' +
                Math.floor(Math.random() * 360) +
                'deg)';

            scene.appendChild(newDiv);
            console.log('Many exec...'); // test
        }
    }


Many(Math.floor(Math.random() * 100 + 10));
}