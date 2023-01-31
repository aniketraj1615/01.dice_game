var randome_number1 = Math.floor(Math.random() * 6 + 1);

var randome_number2 = Math.floor(Math.random() * 6 + 1);

var im = "dice" + randome_number1 + ".png";
var ran_image = "images/" + im;
var pic1 = document.querySelectorAll("img")[0];
pic1.setAttribute("src", ran_image);

var im2 = "dice" + randome_number2 + ".png";
var ran_image2 = "images/" + im2;
var pic1 = document.querySelectorAll("img")[1];
pic1.setAttribute("src", ran_image2);
if (randome_number1 == randome_number2) {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
    "Draw";
}
if (randome_number1 > randome_number2) {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
    "Player 1 won!!!";
}
if (randome_number1 < randome_number2) {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
    "Player 2 won!!!";
}
