var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.ceil(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.ceil(randomNumber2);

var image1 = document.querySelector("img");
image1.setAttribute("src","images/dice" + randomNumber1 + ".png");

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src","images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "⛳ Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳";
} else {
	document.querySelector("h1").innerHTML = "Match drawn!";
}