// AKAN names
// Index: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
const dayNames    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames   = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

document.addEventListener("DOMContentLoaded", function () {

  document.querySelector("#akan-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let day       = Number(document.querySelector("#day").value);
    let month     = Number(document.querySelector("#month").value);
    let year      = Number(document.querySelector("#year").value);
    let gender    = document.querySelector("#gender").value;
    let resultBox = document.querySelector("#result");

    // Check all fields are filled
    if (!day || !month || !year || !gender) {
      resultBox.style.display = "block";
      resultBox.textContent   = "Please fill all fields";
      return;
    }

    // Adjust January and February (treat as months 13 & 14 of previous year)
    if (month === 1 || month === 2) {
      month += 12;
      year  -= 1;
    }

    let century  = Math.floor(year / 100); // cc
    let yearPart = year % 100;             // yy

    // Sakamoto's formula
    let d = (
      Math.floor(century / 4)
      - (2 * century)
      - 1
      + Math.floor((5 * yearPart) / 4)
      + Math.floor((26 * (month + 1)) / 10)
      + day
    ) % 7;

    // Fix negative modulo
    d = ((d % 7) + 7) % 7;

    // Pick the Akan name
    let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    // Show the result
    resultBox.style.display = "block";
    resultBox.textContent   = "You were born on a " + dayNames[d] + " and your Akan name is " + akanName;
  });

});
