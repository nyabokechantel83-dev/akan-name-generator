// AKAN names
// Index: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
const dayNames   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames  = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames= ["Akosua", "Adwoa",  "Abenaa",  "Akua",  "Yaa", "Afua", "Ama"];

document.querySelector("#akan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let day    = Number(document.querySelector("#day").value);
  let month  = Number(document.querySelector("#month").value);
  let year   = Number(document.querySelector("#year").value);
  let gender = document.querySelector("#gender").value;
  let resultBox = document.querySelector("#result");

  if (!day || !month || !year || !gender) {
    resultBox.textContent = "Please fill all fields";
    return;
  }

  // Adjust January and February (treat as months 13 & 14 of previous year)
  if (month === 1 || month === 2) {
    month += 12;
    year  -= 1;
  }

  let century  = Math.floor(year / 100);  // cc
  let yearPart = year % 100;              // yy

  // The formula
  let d = (
    Math.floor(century / 4)          //  cc/4
    - (2 * century)                  // -2*cc
    - 1                              // -1
    + Math.floor((5 * yearPart) / 4) //  (5*yy)/4
    + Math.floor((26 * (month + 1)) / 10) // (26*(mm+1))/10
    + day                            //  DD
  ) % 7;

  //  (JS can return negative % results)
  d = ((d % 7) + 7) % 7;

  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];

  resultBox.textContent =
    "You were born on a " + dayNames[d] +
    " and your Akan name is " + akanName;
});
