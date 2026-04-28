// Akan Names 
// The formula gives // Akan names mapped to what the formula actually output
// The formula gives: 0=Thu, 1=Fri, 2=Sat, 3=Sun, 4=Mon, 5=Tue, 6=Wed

const maleNames   = ["Yaw", "Kofi", "Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku"];

const femaleNames = ["Yaa", "Afua", "Ama", "Akosua", "Adwoa", "Abenaa", "Akua"];

const dayNames    = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];

// Listen for form submission
document.querySelector("#akan-form").addEventListener("submit", function(event) {
  
  // Stop page from refreshing
  event.preventDefault(); 

  // Step 1: Get user input
  const day    = Number(document.querySelector("#day").value);
  const month  = Number(document.querySelector("#month").value);
  const year   = Number(document.querySelector("#year").value);
  const gender = document.querySelector("#gender").value;

  const resultBox = document.querySelector("#result");

  // Step 2: Validate inputs
  if (day < 1 || day > 31) {
    resultBox.textContent = "Day must be between 1 and 31.";
    return;
  }

  if (month < 1 || month > 12) {
    resultBox.textContent = "Month must be between 1 and 12.";
    return;
  }

  if (gender === "") {
    resultBox.textContent = "Please select a gender.";
    return;
  }

   // Step 3: Calculate day of the week using the Akan formula
  const CC = Math.floor(year / 100); // e.g. 1989 → 19
  const YY = year % 100;             // e.g. 1989 → 89

  let d = (4 * CC - 2 * CC - 1 + 45 * YY + Math.floor(1026 * (month + 1) / 100) + day) % 7;

   // Make sure d is not negative
  if (d < 0) {
    d = d + 7;
  }

   // Make sure d is not negative
  if (d < 0) {
    d = d + 7;
  }

   // Step 4: Pick the Akan name based on gender
  let akanName;
  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  // Step 5: Display the result
  resultBox.textContent = "You were born on a " + dayNames[d] + ". Your Akan name is: " + akanName;
});




  

