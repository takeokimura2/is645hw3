let hour;
let minute;
let second;

let updatedHour;
let updatedMinute;
let updatedSecond;

hour = Number(prompt("Enter the current hour: (your input needs to be an integer between 0 and 23)"));

while (isNaN(hour) || hour > 23) {
  hour = Number(prompt("Your entry is invalid. Enter the current hour: (your input needs to be an integer between 0 and 23)"))
}


minute = Number(prompt("Enter the current minute: (your input needs to be an integer between 0 and 59)"));

while (isNaN(minute) || minute > 59) { minute = Number(prompt("Your entry is invalid. Enter the current minute: (your input needs to be an integer between 0 and 59)")) }


second = Number(prompt("Enter the current second: (your input needs to be an integer between 0 and 59)"))

while (isNaN(second) || second > 59) { second = Number(prompt("Your input is invalid. Enter the current second: (your input needs to be an integer between 0 and 59)")) }



if (second < 59) {
  updatedHour = hour;
  updatedMinute = minute;
  updatedSecond = second + 1;
}

else if (second === 59 && minute < 59) {
  updatedHour = hour;
  updatedMinute = minute + 1;
  updatedSecond = 0;
}

else if (second === 59 && minute === 59 && hour < 23) {
  updatedHour = hour + 1;
  updatedMinute = 0;
  updatedSecond = 0;
}

else {
  updatedHour = 0;
  updatedMinute = 0;
  updatedSecond = 0;
}

alert(`Time input: ${hour}h ${minute}m ${second}s`);
alert(`One second later: ${updatedHour}h ${updatedMinute}m ${updatedSecond}s`)


