var  randomnumber1=Math.floor(Math.random()*6)+1;
var dicechange="images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dicechange);

var randomnumber2=Math.floor(Math.random()*6)+1;
var dice2="images/dice"+randomnumber2+".png";
var image=document.querySelectorAll("img")[1];
image.setAttribute("src",dice2);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="🚩player1 win";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="🤘player2 win";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
