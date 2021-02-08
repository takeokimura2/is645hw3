let counter;

password = prompt("Enter your password:")

for (counter = 1; counter <= 3; counter++) {
  if (counter === 3) {
    alert(`Your account is locked!  You failed to enter the correct password ${counter} times.`)
  }
  else if (counter < 3 && password !== "secret") {
    alert("You entered an incorrect password");
    password = prompt("Enter your password:");
  }

  else {
    alert(`You entered the correct password after ${counter} attempt(s).`);
    counter = 3
  }
}