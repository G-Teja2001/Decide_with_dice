
var randomNumber1 = (Math.floor(Math.random()*6-1+1))+1;

var diceImageFileName = `./images/dice${randomNumber1}.png`;
var currentImage =document.getElementsByClassName("img1")[0];
console.log(currentImage)

currentImage.src  = diceImageFileName;


var randomNumber2 = (Math.floor(Math.random()*6-1+1))+1;


var diceImageFileName2 = `./images/dice${randomNumber2}.png`;
var currentImageright = document.getElementsByClassName("img2")[0];

currentImageright.src = diceImageFileName2;
console.log(randomNumber1)
console.log(randomNumber1)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){

    document.querySelector("h1").textContent = "Player 2 Wins!"
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!"
}