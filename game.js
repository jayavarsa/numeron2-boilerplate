// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1 = Math.round(Math.random() * 100);
var num2 = Math.round(Math.random() * 100);

var num1div = document.getElementById("number1");
var num2div = document.getElementById("number2");

num1div.textContent = num1;
num2div.textContent = num2;

// Iteration 3: Creating variables required to make the game functional
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3;
var num3div = document.getElementById("number3");
var score = 0;
randomize()

// Iteration 5: Creating a randomize function to make the game functional
function randomize() {
  var operator = Math.floor(Math.random() * 5) + 1; // 1 to 5 for five operators

  // Assuming you have an array of operators
  var operators = ["+", "-", "*", "/", "%"];
  var chosenOperator = operators[operator - 1];

  // Perform the operation and display the result
  switch (chosenOperator) {
    case "+":
      num3 = num1 + num2;
      break;
    case "-":
      num3 = num1 - num2;
      break;
    case "*":
      num3 = num1 * num2;
      break;
    case "/":
      num3 = num1 / num2;
      break;
    case "%":
      num3 = num1 % num2;
      break;
    default:
      break;
  }

  // Display the result
  num3div.textContent = num3;
}

// Iteration 6: Making the Operators (button) functional
plus.addEventListener("click", function () {
  checkAnswer(num1+num2);
});

minus.addEventListener("click", function () {
  checkAnswer(num1-num2);
});

multiply.addEventListener("click", function () {
  checkAnswer(num1*num2);
});

divide.addEventListener("click", function () {
  checkAnswer(num1/num2);
});

modulus.addEventListener("click", function () {
  checkAnswer(num1%num2);
});

function checkAnswer(operator) {
  // Check if the operator matches the current operator
  if (num3 === operator) {
    score++; // Increment the score
    // Store the updated score in localStorage
    localStorage.setItem("score", score);
  } else {
    localStorage.setItem("score", score);
    window.location.href = "gameover.html"
  }

  // Reset the game with new numbers and a new operator
  num1 = Math.round(Math.random() * 100,3);
  num2 = Math.round(Math.random() * 100,3);
  num1div.textContent = num1;
  num2div.textContent = num2;
  randomize();
}

// Iteration 7: Making Timer functional
var timer;
var timeLimit = 30; // Set your desired time limit in seconds

function startTimer() {
    var seconds = timeLimit;
    var timerDiv = document.getElementById("timer");
  
    timer = setInterval(function () {
      if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = "gameover.html"
      } else {
        timerDiv.textContent = seconds;
        seconds--;
      }
    }, 1000);
}
  
// Start the timer when the script is loaded
startTimer();