const dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const maleNames = ["Kwame", "Kwasi", "Kwadwo", "Kwaku", "Yaw", "Kofi", "Kwabena"];
const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

document.querySelector("#akan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let DD = Number(document.querySelector("#day").value);
  let MM = Number(document.querySelector("#month").value);
  let YY = Number(document.querySelector("#year").value);
  let gender = document.querySelector("#gender").value;
  let resultBox = document.querySelector("#result");

  if (!DD || !MM || !YY || !gender) {
    resultBox.textContent = "Please fill all fields";
    return;
  }

  // real date validation
  let testDate = new Date(YY, MM - 1, DD);
  if (
    testDate.getFullYear() !== YY ||
    testDate.getMonth() !== MM - 1 ||
    testDate.getDate() !== DD
  ) {
    resultBox.textContent = "Invalid date!";
    return;
  }

  let CC = Math.floor(YY / 100);
  let YY2 = YY % 100;

  // Akan formula
  let d = Math.floor(
    (CC / 4) -
    (2 * CC) -
    1 +
    (5 * YY2) / 4 +
    (26 * (MM + 1)) / 10 +
    DD
  ) % 7;

  d = (d + 7) % 7;

  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

  resultBox.textContent =
    "You were born on " + dayNames[d] +
    " and your Akan name is " + akanName;
});
