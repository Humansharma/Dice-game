//alert("bhag ja");
var n=Math.random();
n=Math.floor(n*6)+1;
var diceimg="images/dice"+n+".png";
document.querySelectorAll("img")[0].setAttribute("src",diceimg);
//second dice
var nn=Math.random();
nn=Math.floor(nn*6)+1;
var diceimg2="images/dice"+nn+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceimg2);
//h1 change
if(n>nn)
document.querySelector("h1").innerHTML="❤️Player 1 win!";
else if(nn>n){
    document.querySelector("h1").innerHTML="❤️player 2 win!";
}else{
    document.querySelector("h1").innerHTML="🥲🥲Draw";
}