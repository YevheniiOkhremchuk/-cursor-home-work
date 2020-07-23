let number1 = +prompt ("Enter your first number:");
while (!Number.isInteger(number1)) {
  number1 = parseInt(
    prompt("Input first integer number:", Math.round(number1))
  );
}

let number2 = +prompt("Enter your second number:", number1 + 1);
while (!Number.isInteger(number2) || number1 >= number2 ) {
  number2 = parseInt(
    prompt("Input your second integer number(second > first):")
  );
}
console.log(number2);

let sumNumber = 0;
let check = confirm("Skip even numbers?");

if (check) {
  for (let i = number1; i <= number2; i++) {
    if (i % 2 !== 0) {
      sumNumber += i;
    }
  }
} else {
  for (let i = number1; i <= number2; i++) {
    sumNumber += i;
  }
}

alert("Sum of numbers:" + sumNumber);
console.log(sumNumber);