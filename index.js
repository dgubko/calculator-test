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
});

// ### PLUS ###
function sum(a, b) {
  return a + b;
}
document.getElementById("plus").addEventListener("click", function () {
  document.getElementById("screen").innerText = `${screen.innerText} +\xa0`;
});
