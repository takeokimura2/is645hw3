const dayEntered = prompt("What day is today?");


switch (dayEntered) {

  case "sun":
    alert("You entered: " + dayEntered + ". The following day is: Monday.");
    break;
  case "mon":
    alert("You entered: " + dayEntered + ". The following day is: Tuesday.");
    break;
  case "tue":
    alert("You entered: " + dayEntered + ". The following day is: Wednesday.");
    break;
  case "wed":
    alert("You entered: " + dayEntered + ". The following day is: Thursday.");
    break;
  case "thu":
    alert("You entered: " + dayEntered + ". The following day is: Friday.");
    break;
  case "fri":
    alert("You entered: " + dayEntered + ". The following day is: Saturday.");
    break;
  case "sat":
    alert("You entered: " + dayEntered + ". The following day is: Sunday.");
    break;
  default:
    alert("You entered an invalid day type. Please enter the current day with three letters in lower case. (i.e. mon, tue, wed, etc.)")
}