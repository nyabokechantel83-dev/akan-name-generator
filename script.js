// Zeller's outputs: 0=Sat, 1=Sun, 2=Mon, 3=Tue, 4=Wed, 5=Thu, 6=Fri
const dayNames    = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const maleNames   = ["Kwame",    "Kwasi",  "Kwadwo", "Kwabena", "Kwaku",     "Yaw",      "Kofi"];
const femaleNames = ["Ama",      "Akosua", "Adwoa",  "Abenaa",  "Akua",      "Yaa",      "Afua"];

document.addEventListener("DOMContentLoaded", function () {

  document.querySelector("#akan-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let DD     = Number(document.querySelector("#day").value);
    let MM     = Number(document.querySelector("#month").value);
    let YY     = Number(document.querySelector("#year").value);
    let gender = document.querySelector("#gender").value;
    let resultBox = document.querySelector("#result");

    // Check all fields are filled
    if (!DD || !MM || !YY || !gender) {
      resultBox.style.display = "block";
      resultBox.textContent   = "Please fill all fields";
      return;
    }

    // Adjust January and February
    if (MM === 1 || MM === 2) {
      MM += 12;
      YY -= 1;
    }

    let CC  = Math.floor(YY / 100);
    let YY2 = YY % 100;

    // Zeller's Congruence formula
    let d = (
      DD +
      Math.floor((13 * (MM + 1)) / 5) +
      YY2 +
      Math.floor(YY2 / 4) +
      Math.floor(CC / 4) -
      2 * CC
    ) % 7;

    // Fix negative modulo
    d = ((d % 7) + 7) % 7;

    // Pick the Akan name
    let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    // Show the result
    resultBox.style.display = "block";
    resultBox.textContent   = "You were born on " + dayNames[d] + " and your Akan name is " + akanName;
  });

});
