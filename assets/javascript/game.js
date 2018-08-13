//variables
var wordOptions = ["castle","more","nancy","galley","force","peace"];
var selectedWord = "";
var lettersInSelectedWord =[];
var lettersWithoutArray = [];
var numSpaces = 0;
var spacesAndSuccess = [];
var wrongSelects = [];


var winCounter = 0;
var lossCounter = 0;
var guessLeft = 9;





// functions

function resumeGame() {
 selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)] ;
    lettersInSelectedWord = selectedWord.split("");
    numSpaces = lettersInSelectedWord.length;
    //lettersWithoutArray =  selectedWord.split("").join();
   


    // reset screen
    guessLeft = 9;
    spacesAndSuccess = [];
    wrongSelects = [];

    for( var i = 0; i < numSpaces; i++){
        spacesAndSuccess.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = spacesAndSuccess;
    document.getElementById("numGuessesLeft").innerHTML = guessLeft;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;

 console.log(selectedWord);
 console.log(lettersInSelectedWord);
 console.log(lettersWithoutArray);
 console.log("number of lettters is:   "+ numSpaces);   
console.log("number of spaces  " + spacesAndSuccess);

}

function compareLetter(letter){

    var isLetterInWord = false;
    for (var i = 0; i<numSpaces; i++){
        if (selectedWord[i] == letter)
        { isLetterInWord = true;}
    }

    if (isLetterInWord){
        for (var i = 0; i<numSpaces; i++){
            if (selectedWord[i] == letter)
            {spacesAndSuccess[i] = letter;}

    }

}
else{
    wrongSelects.push(letter);
    guessLeft--;    
}

console.log(spacesAndSuccess);
}

function gameComplete(){
console.log("winner count     " + winCounter);
console.log("loss count       " +lossCounter);
console.log("guessleft        " +guessLeft);


document.getElementById("numGuessesLeft").innerHTML = guessLeft;
document.getElementById("wordToGuess").innerHTML = spacesAndSuccess;

if (lettersInSelectedWord.toString() == spacesAndSuccess.toString()){
   alert("you win");
   alert(lettersInSelectedWord);
    winCounter++;
    
    document.getElementById("winCounter").innerHTML = winCounter;
    resumeGame();
}
else if (guessLeft == 0){
    alert("you loose")
    lossCounter++
    
    document.getElementById("lossCounter").innerHTML = lossCounter;
    console.log("you Lost");
    resumeGame();
}

}
//main

resumeGame();

document.onkeyup = function(event){
var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
console.log(letterGuessed);
compareLetter(letterGuessed);
gameComplete();

}