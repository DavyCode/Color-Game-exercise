var colors = generateRandomColors(numSquares);                         //calls  the function generateRandomColors 
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();                                 //call the function pick color which randomly picks a color for the game
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");                         
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
 


easyBtn.addEventListener("click", function() {
       hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
       
        //on easy mode generate only 3 random color
         numSquares = 3; 
          colors = generateRandomColors(numSquares);
          pickedColor = pickColor();
          colorDisplay.textContent = pickedColor;

           for (var i = 0; i < squares.length; i++){
             if(colors[i]){
                   squares[i].style.background =colors[i];
             }else{
                   squares[i].style.display ="none";
             }
       }
});







hardBtn.addEventListener("click", function() {
       hardBtn.classList.add("selected");
       easyBtn.classList.remove("selected");
        //on difficult mode generate 6 random color
         numSquares = 6; 
          colors = generateRandomColors(numSquares);
          pickedColor = pickColor();
          colorDisplay.textContent = pickedColor;
          for (var i = 0; i < squares.length; i++){
                squares[i].style.background =colors[i];
                squares[i].style.display ="block";
       }
});







resetButton.addEventListener("click", function() {
        //generate all new colors
        colors = generateRandomColors(numSquares);
        //pick a new random color from array
        pickedColor =pickColor();
        //change colorDisplay to match picked Color
        colorDisplay.textContent = pickedColor;
        //change colors of squares
        for (var i= 0; i < squares.length; i++) {
                squares[i].style.background = colors[i];
                
        }
        h1.style.background ="#232323";
});






colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
           //add initial colors to squares
           squares[i].style.background =colors[i];
       
           //add click listeners to squares
       squares[i].addEventListener("click", function(){
            //grab color of clicked square
             var clickedColor= this.style.background;

            //compare clickedColor to pickedColor
            console.log(clickedColor, pickedColor);         //a little bug!! log to console to compare colors 
         if(clickedColor === pickedColor){
             resetButton.textContent = "Play Again?"    
             messageDisplay.textContent ="Correct!";
             changeColors(clickedColor);                    //calls the function clickedColor which  overwrite all colors to the picked color..
            //changes background color to picked color
             h1.style.background = clickedColor;         
 }else{
            this.style.background ="#232323";
            messageDisplay.textContent ="Try Again!!"
         }
       });

} 





//function to change color squares to match correct chosen color
function changeColors(color){
        //loop through all squares
        for (var i = 0; i < squares.length; i++) {
              //  change each color  to match given color
                squares[i].style.background = color;
                
        }
}




//funtion to randomly pick a color

function pickColor() {
        //generate a random number for the colors
       var random=Math.floor( Math.random() * colors.length);
       return colors[random];
}





//function take a number and generate "x" number of random colors inside of an array
function generateRandomColors(num){
   //make an array
   var arr = [];
     //repeat num times
     for (var i = 0; i< num; i++) {
             arr.push(randomColor());
        //get random color and push into arr
     }
   //return array
   return arr;
}





//function to generate random color
function randomColor(){
   //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
   //pick a "green" from 0 - 255
   var g = Math.floor(Math.random() * 256);
   //pick a "blue" from 0 - 255
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
   

}