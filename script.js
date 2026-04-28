document.addEventListener("DOMContentLoaded", function () {

  // Correct Akan mapping (0 = Saturday)
  const dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const maleNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];

  const femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

  const form = document.querySelector("#akan-form");
  const resultBox = document.querySelector("#result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let day = Number(document.querySelector("#day").value);
    let month = Number(document.querySelector("#month").value);
    let year = Number(document.querySelector("#year").value);
    let gender = document.querySelector("#gender").value;

    // Check empty inputs
    if (!day || !month || !year || !gender) {
      resultBox.textContent = "Please fill all fields";
      return;
    }

    // Adjust January & February
    if (month === 1 || month === 2) {
      month += 12;
      year -= 1;
    }

    let century = Math.floor(year / 100);
    let yearPart = year % 100;

    // Akan formula
    let d = Math.floor(
      Math.floor(century / 4) -
      (2 * century) -
      1 +
      Math.floor((5 * yearPart) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day
    ) % 7;

    // Fix negative results
    d = (d + 7) % 7;

    // Get Akan name
    let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

    // Display result
    resultBox.textContent =
      "You were born on " + dayNames[d] +
      " and your Akan name is " + akanName;
  });

});
