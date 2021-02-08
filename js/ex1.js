const studentName = prompt("Enter your name:");
units = Number(prompt("Enter the number of units completed:"));

while (isNaN(units) || units < 0) { units = Number(prompt("Your entry is invalid. Enter the number of units completed:")) }


if (units >= 0 && units <= 30) { alert(`Hello, ${studentName}. Your grade standing is freshman.`) }

else if (units >= 31 && units <= 60) { alert(`Hello, ${studentName}. Your grade standing is Sophomore.`) }

else if (units >= 61 && units <= 90) { alert(`Hello, ${studentName}.Your grade standing is Junior.`) }


else { alert(`Hello, ${studentName}. Your grade standing is Senior.`) };
