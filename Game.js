// ? Generating a number from 1 to 20
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// ? Reducing a code by using a function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// ? Accepting the value from the input field and displaying it in a console window

document.querySelector(".check").addEventListener("click", function () {
  const guessing = Number(document.querySelector(".guess").value);
  console.log(guessing);
  // ? Displaying error message if number is not inserted and clicking on the button

  if (!guessing) {
    displayMessage("Error! Number is Mandatory🚫");
    document.querySelector("body").style.backgroundColor = "red";
  }

  // ? Comparing if generated javascript number and inserted number is same or not
  else if (guessing === secretNumber) {
    displayMessage("Correct Number😊");
    document.querySelector(".number").textContent = secretNumber;

    // ? If the generated number and inserted number is same the background color will change to green
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // ? If inserted number is wrong
  else if (guessing !== secretNumber) {
    if (score > 1) {
      displayMessage(guessing > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game🤣");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// ? Functionality of start again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// ? A pop up message will be shown after clicking on the Rules button

document.querySelector(".rules").addEventListener("click", function () {
  alert(` Read the rules carefully given below
Rule 1)  A random number will be generated on the "?" mark.
Rule 2)  if the inserted number and generated number is same then you will get a point and the background color will be changed to green..
Rule 3)  if you guess it wrong -1 will be detected from the given score of 20 `);
});
