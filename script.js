// Akan Names
const dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const maleNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];

const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

document.querySelector("#akan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let day = Number(document.querySelector("#day").value);
  let month = Number(document.querySelector("#month").value);
  let year = Number(document.querySelector("#year").value);
  let gender = document.querySelector("#gender").value;
  let resultBox = document.querySelector("#result");

  if (!day || !month || !year || !gender) {
    resultBox.textContent = "Please fill all fields";
    return;
  }

  // Adjust January and February
  if (month === 1 || month === 2) {
    month += 12;
    year -= 1;
  }

  let century = Math.floor(year / 100);
  let yearPart = year % 100;

  // Akan formula
  let d =
    Math.floor(century / 4) -
    (2 * century) -
    1 +
    Math.floor((5 * yearPart) / 4) +
    Math.floor((26 * (month + 1)) / 10) +
    day;

  d = Math.floor(d % 7);
  d = (d + 7) % 7;

  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

  resultBox.textContent =
    "You were born on " + dayNames[d] +
    " and your Akan name is " + akanName;
});
