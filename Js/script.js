const display = document.getElementById("display");

function addToDisplay(input) {
  display.value += input;
}

function remove() {
  display.value = "";
}

function calcutator() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

$("#img1").click(function () {
  $("#calcutator").slideToggle(500);
});
// function shows() {
//   document.getElementById("calcutator").toggle();
// }
