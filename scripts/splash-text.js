var splashText = document.getElementById("splash-text");

const splashTextOptions = [
    "Play Persona 3 Reload",
    "THE ROAD!!!",
    "Lose Brain Cells One By One",
    "SHORTS!!!",
    "Still More Original Than Hollywood",
    "More Funny Than Kaden",
    "Pootis Spencer Here",
    "Not Any Closer To Nationals",
    "Great Value Bogdan Gura",
    "Here We Are Again, It's Always Such A Pleasure",
    "For Reals?",
    "It Just Works",
    "Ctrl+C & Ctrl+V Is The Only Way",
    "Brian, Do Your Work"
];

/*function howManySplashText() {
    var selection = splashTextOptions[splashTextOptions.length - 1];

    console.log(selection);
    splashText.innerHTML = selection;
}*/

function pickSplashText() {
    var selection = splashTextOptions[Math.floor(Math.random() * splashTextOptions.length)];

    splashText.innerHTML = selection;
}

pickSplashText();