var colors = generateRandomColor(6);

var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var ColorDisp = document.querySelector("#colordisp");
var Message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var max = 6;

colordisp.textContent = pickedColor;
resetButton.addEventListener("click", resetGame)

easyBtn.addEventListener("click", easy);


hardBtn.addEventListener("click", hard);


 for(var i=0; i<square.length; i++){
 	//add initial color to squares
 	square[i].style.background = colors[i];

 	//add click listner to squares
 	square[i].addEventListener("click", function(){
 		var clickedColor = this.style.background;
 		if (clickedColor === pickedColor){
 			Message.textContent = "Correct";
 			resetButton.textContent = "Play again?"
 			change(clickedColor);
 			h1.style.background = clickedColor;

 		}
 		else {
 			this.style.background = "#232323";
 			Message.textContent = "Try again";
 			

 		}
 	});
 }

 function change(color){
 	for(var i =0; i< square.length; i++){
 		square[i].style.background = color;
 	}
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }


 function generateRandomColor(num){
 	var arr = [];
 	for(var i = 0; i<num; i++){
 		arr.push(randomColor());
 	}
 	return arr;
 }

 function randomColor(){
	var red = Math.floor(Math.random() * 256);
 	var blue = Math.floor(Math.random() * 256);
 	var green= Math.floor(Math.random() * 256);
    var randcol = "rgb("+red+", "+blue+", "+green+")";
    return randcol;
 }


 function resetGame(){
	resetButton.textContent = "New color"
	Message.textContent = "";
	h1.style.background = "steelblue";
	colors = generateRandomColor(max);
 	pickedColor = pickColor();
 	colordisp.textContent = pickedColor;
 	for(var i=0; i<square.length; i++){
  	square[i].style.background = colors[i];
 }
}


function easy(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	max = 3
	colors = generateRandomColor(max);
	pickedColor = pickColor();
	ColorDisp.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.background = colors[i];
		}
		else {
			square[i].style.display = "none";

		}
	}

}

function hard(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	max = 6
	colors = generateRandomColor(max);
	pickedColor = pickColor();
	ColorDisp.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		square[i].style.background = colors[i];
		square[i].style.display = "block";

		
	}

}
