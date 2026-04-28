const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

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

  // adjust Jan & Feb
  if (MM === 1 || MM === 2) {
    MM += 12;
    YY -= 1;
  }

  let CC = Math.floor(YY / 100);
  let YY2 = YY % 100;

  // ✅ CORRECT AKAN FORMULA (Zeller's Congruence)
  let d = (
    DD +
    Math.floor((13 * (MM + 1)) / 5) +
    YY2 +
    Math.floor(YY2 / 4) +
    Math.floor(CC / 4) -
    2 * CC
  ) % 7;

  d = (d + 7) % 7;

  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

  resultBox.textContent =
    "You were born on " + dayNames[d] +
    " and your Akan name is " + akanName;
});
