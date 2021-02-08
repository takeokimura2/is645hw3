const number1 = Number(prompt("Enter your first interger number: "));

if (number1 >= 0 || number1 < 0) {
  const number2 = Number(prompt("Enter your second interger number: "))

  if (number2 >= 0 || number2 < 0) {
    alert(`Addition: ${number1 + number2}`);
    alert(`Subtraction: ${number1 - number2}`);
    alert(`Multiplication: ${number1 * number2}`);
    alert(`Division: ${number1 / number2}`);
    alert(`Modulo: ${number1 % number2}`);
  }
  else {
    alert("You entered something other than a number");
    const number2 = Number(prompt("Enter your second interger number: "));
  }
}

else {
  alert("You entered something other than a number");
  const number1 = Number(prompt("Enter your first interger number: "));
}






