// getDay() returns: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
const dayNames    = ["Sunday",  "Monday",  "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames   = ["Kwasi",   "Kwadwo",  "Kwabena", "Kwaku",     "Yaw",      "Kofi",   "Kwame"];
const femaleNames = ["Akosua",  "Adwoa",   "Abenaa",  "Akua",      "Yaa",      "Afua",   "Ama"];

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

    // JavaScript Date does all the work
    // MM - 1 because Date months start at 0 (January = 0)
    let date = new Date(YY, MM - 1, DD);
    let d    = date.getDay();

    // Pick the Akan name
    let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    // Show the result
    resultBox.style.display = "block";
    resultBox.textContent   = "You were born on " + dayNames[d] + " and your Akan name is " + akanName;
  });

});
