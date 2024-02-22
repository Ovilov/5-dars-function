function yigindi(a, b) {
  console.log(a + b);
}
yigindi(2, 4);

///////////////////////////

function minuts(a) {
  console.log(a * 60, "sekund");
}
minuts(50);

//////////////////////////

function nextInteger(a) {
  console.log(a + 1);
}
nextInteger(10);

//////////////////////////

function uchburchakYuzi(x, y) {
  console.log((x * y) / 2);
}
uchburchakYuzi(3, 4);

//////////////////////////

function toData(a) {
  console.log(a * 365);
}
toData(22);

/////////////////////////

function kub(x) {
  console.log(x ** 3);
}
kub(6);

/////////////////////////

function firstElement(a, b, c) {
  console.log(a);
}
firstElement(847393, 4, 7);

//////////////////////////

function kopaytuvchi(x, y) {
  console.log(x * y);
}
kopaytuvchi(4, 7);

////////////////////////

function toSekund(x) {
  console.log(x * 3600, "sekund");
}
toSekund(2);

///////////////////////

function uchinchiTomon(tomon1, tomon2) {
  console.log(tomon1 + tomon2 - 1);
}
uchinchiTomon(4, 8);

//////////////////////////

const son1 = Number(prompt("Birinchi sonni kiriting :"));
const son2 = Number(prompt("Ikkinchi sonni kiriting :"));

const operator = prompt("Amallarni kiriting : ");

switch (operator) {
  case "*":
    console.log(son1 * son2);
    break;
  case "/":
    console.log(son1 / son2);
    break;
  case "+":
    console.log(son1 + son2);
    break;
  case "-":
    console.log(son1 - son2);
    break;
  default:
    console.log("Iltimos tekshirib qayta kiriting !");
}

//////////////////////////////////////////////////////////////

oddAndEvent(9);

function oddAndEvent(num) {
  if (num % 2 == 0) {
    console.log("Juft son");
  } else {
    console.log("Toq son");
  }
}

///////////////////////////

