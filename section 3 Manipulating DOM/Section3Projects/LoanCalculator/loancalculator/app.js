//Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //hide results
  document.getElementById("results").style.display = "none";
  //show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 500);

  e.preventDefault();
});
// .addEventListener("submit", calculateResults); //This is to have calculateResults called immediately

//Calculate submit event
function calculateResults() {
  //got rid of 'e' as the even handler, getting rid of e.preventDefault()
  console.log("calculamalating... ");

  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  //Results
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  //calculation variables
  //𝑃𝑉= [𝑃𝑀𝑇/𝑖] [1−(1/(1+𝑖)𝑛)]

  //   PV is the loan amount
  //   PMT is the monthly payment
  //   i is the interest rate per month in decimal form (interest rate percentage divided by 12)
  //   n is the number of months (term of the loan in months)

  const principal = parseFloat(amount.value); //parseFloat converts a string if needed into a dividable number
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //complete monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments); //calculatedInterest and calculatedPayments are both exponents of Math.pow, Math is a static object
  //Math.pow(number, exponent) ex. Math.pow(5,2) =  25
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2); //toFixed is reducing decimal value to 2 decimal places
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    //show results
    document.getElementById("results").style.display = "block";
    // hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Check numbers");
    console.log("check numbers");
  }

  //   e.preventDefault();
}

// Show Error
function showError(error) {
  //show results
  document.getElementById("results").style.display = "none";
  // hide loader
  document.getElementById("loading").style.display = "none";
  //create div
  const errorDiv = document.createElement("div");

  // get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Add class
  errorDiv.className = "alert alert-danger"; //bootstrap notation

  //create text node and append div
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading);

  //clear error after 3 seconds
  setTimeout(clearError, 3000);
}
function clearError() {
  document.querySelector(".alert").remove();
}
