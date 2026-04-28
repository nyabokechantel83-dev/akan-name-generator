// Akan Names
const dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const maleNames = ["Kwame", "Kwasi", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

// Form submission
document.querySelector("#akan-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Input values
  let DD = Number(document.querySelector("#day").value);
  let MM = Number(document.querySelector("#month").value);
  let YY = Number(document.querySelector("#year").value);
  let gender = document.querySelector("#gender").value;
  let resultBox = document.querySelector("#result");

  // Check empty inputs
  if (!DD || !MM || !YY || !gender) {
    resultBox.textContent = "Please fill all fields";
    return;
  }

  // Adjust January and February
  if (MM === 1 || MM === 2) {
    MM += 12;
    YY -= 1;
  }

  // Split year
  let CC = Math.floor(YY / 100);
  let YY2 = YY % 100;

  // Akan formula
  let d = Math.floor(
    Math.floor(CC / 4) -
    (2 * CC) -
    1 +
    Math.floor((5 * YY2) / 4) +
    Math.floor((26 * (MM + 1)) / 10) +
    DD
  ) % 7;

  // Fix negative result
  if (d < 0) {
    d += 7;
  }

  // Get Akan name
  let akanName =
    gender === "male" ? maleNames[d] : femaleNames[d];

  // Output result
  resultBox.textContent =
    "You were born on a " +
    dayNames[d] +
    " and your Akan name is " +
    akanName;
});
