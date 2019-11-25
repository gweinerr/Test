const readlineSync = require("readline-sync");

do {
  var base = Number(readlineSync.question("Enter base: "));
  var height =  Number(readlineSync.question("Enter height: "));
  var hypo = Number(readlineSync.question("Enter hypotenuse: "));
} while (Number.isNaN());

if ((base ** 2) + (height ** 2) === hypo ** 2) {
  console.log("\nYes, that's a right triangle!")
} else {
  console.log("\nNope...not a right triangle.")
}
