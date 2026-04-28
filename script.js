const dayNames    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames   = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

document.querySelector("#akan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let DD     = Number(document.querySelector("#day").value);
  let MM     = Number(document.querySelector("#month").value);
  let YY     = Number(document.querySelector("#year").value);
  let gender = document.querySelector("#gender").value;
  let result = document.querySelector("#result");

  if (MM === 1 || MM === 2) {
    MM += 12;
    YY -= 1;
  }

  let CC = Math.floor(YY / 100);
  let yy = YY % 100;

  let d = (Math.floor(CC / 4) - (2 * CC) - 1 + Math.floor((5 * yy) / 4) + Math.floor((26 * (MM + 1)) / 10) + DD) % 7;
  d = ((d % 7) + 7) % 7;

  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

  result.style.display = "block";
  result.textContent = "You were born on " + dayNames[d] + " and your Akan name is " + akanName;
});
