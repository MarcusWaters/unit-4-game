//1. create function for random numbers
//2. create function to compare scores from player and computer, ex. checkWin
//3. add the value from the choice to the players score 
//4. create a function to start the game, ex function startGame
//5. 


var crystal = {
    blue: {
        name: "Blue", 
        value: 0,
    },
    red: {
        name: "Red",
        value: 0,
    },
    green: {
        name: "Green",
        value: 0,
    },
    purple: {
        name: "purple",
        value: 0,
    }
}

var playerScore = 0
var computerScore = 0
var wins = 0
var losses = 0


function random(min,max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function checkWin() {
    if (playerScore > computerScore) {
        alert ("You Lose! Try Again")
        losses++
        $("#losses").text(losses)
        startGame()
    }
    else if (playerScore===computerScore) {
        alert ("You Win! Celebrate!")
        wins++
        $("#wins").text(wins)
        startGame()
    }
}

function startGame () {
    playerScore = 0
    computerScore = random(19, 120)
    crystal.blue.value = random(1, 12)
    crystal.green.value = random(1, 12)
    crystal.red.value = random(1, 12)
    crystal.purple.value = random(1, 12)
    $("#playerScore").text(playerScore)
    $("#computerScore").text(computerScore)
    console.log("computerScore;", computerScore)
    console.log("blueScore", crystal.blue.value)
    console.log("redScore", crystal.red.value)
    console.log("greenScore", crystal.green.value)
    console.log("purpleScore", crystal.purple.value)
}

function addValues (clickedCrystal) {
     playerScore += clickedCrystal.value
     $("#playerScore").text(playerScore)
     checkWin()
     console.log("heres the new score", playerScore)
}




startGame()
$("#blue").click(function(){
    addValues(crystal.blue)
})
$("#red").click(function(){
    addValues(crystal.red)
})
$("#green").click(function(){
    addValues(crystal.green)
})
$("#purple").click(function(){
    addValues(crystal.purple)
})