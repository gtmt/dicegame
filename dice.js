// for image one//
function refresh() {
let randomnumber=Math.floor(Math.random()*6)+1;
let randomimage=("dice"+randomnumber+ ".png"); 
randomimage=("images/"+randomimage);
let image=document.querySelectorAll("img")[0];
image.setAttribute("src", randomimage);
// for image two//
 let randomnumber1=Math.floor(Math.random()*6)+1;
 let randomimage1=("dice"+randomnumber1+".png")
 randomimage1=("images/"+randomimage1);
 let image1=document.querySelectorAll("img")[1];
 image1.setAttribute("src",randomimage1);
if(randomnumber>randomnumber1){
    document.querySelector("h1").innerHTML="player1 win the match"; 
}
else if(randomnumber<randomnumber1)
{
    document.querySelector("h1").innerHTML="player2 win the match"; 
}
else
{
    document.querySelector("h1").innerHTML="Match draw"; 
}}