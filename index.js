var calc = new Calculator();
console.log(calc);
var operButtons = document.getElementsByClassName("operButton");
for (var i = 0; i < operButtons.length; i++) {
  operButtons[i].addEventListener("click", function (event) {
    var lastChar = screen.innerText[screen.innerText.length - 1];
    if (lastChar !== "\xa0") {
      calc.addOperation(event.target.id);
      document.getElementById(
        "screen"
      ).innerText = `${screen.innerText} ${event.target.innerText}\xa0`;
    } else {
      var newText = screen.innerText;
      calc.replaceOper(event.target.id);

      document.getElementById("screen").innerText =
        newText.slice(0, -2) + `${event.target.innerText}\xa0`;
      console.log(calc.operations);
    }
  });
}
var screen = document.getElementById("screen");
function passNumber(number) {
  var isEmpty = screen.innerText === "0";
  document.getElementById("screen").innerText = isEmpty
    ? number
    : `${screen.innerText}${number}`;
}
var numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (event) {
    var buttonNumber = event.target.innerText;
    passNumber(buttonNumber);
  });
}

// ### AC ###

document.getElementById("AC").addEventListener("click", function () {
  document.getElementById("screen").innerText = 0;
  calc.clean();
});

// ### PLUS ###
function sum(a, b) {
  return a + b;
}
