
// Akan Names

const maleNames = ["Yaw", "Kofi", "Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku"];

const femaleNames = ["Yaa", "Afua", "Ama", "Akosua", "Adwoa", "Abenaa", "Akua"];

const dayNames = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];

// Listen for form submission
document.querySelector("#akan-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const dayInput = document.querySelector("#day").value;
  const monthInput = document.querySelector("#month").value;
  const yearInput = document.querySelector("#year").value;
  const gender = document.querySelector("#gender").value;

  const resultBox = document.querySelector("#result");

  if (dayInput === "" || monthInput === "" || yearInput === "") {
    resultBox.textContent = "Please fill in all fields.";
    return;
  }

  const day = Number(dayInput);
  const month = Number(monthInput);
  const year = Number(yearInput);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    resultBox.textContent = "Please enter valid numbers.";
    return;
  }

  if (day < 1 || day > 31) {
    resultBox.textContent = "Day must be between 1 and 31.";
    return;
  }

  if (month < 1 || month > 12) {
    resultBox.textContent = "Month must be between 1 and 12.";
    return;
  }

  if (gender === "") {
    resultBox.textContent = "Please select a gender.";
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;

  // Akan Formula:
  // d = ((4 * CC - 2 * CC - 1) + (5 * YY) + Math.floor((26 * (month + 1)) / 10) + day) % 7
  // CC = century (first 2 digits of year)
  // YY = year within century (last 2 digits)

  let d =
    (( (CC * 4) - (2 * CC) - 1 ) +
      (5 * YY) +
      Math.floor((26 * (month + 1)) / 10) +
      day) % 7;

  if (d < 0) {
    d = d + 7;
  }

  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  resultBox.textContent =
    "You were born on a " + dayNames[d] +
    ". Your Akan name is " + akanName + ".";
});
