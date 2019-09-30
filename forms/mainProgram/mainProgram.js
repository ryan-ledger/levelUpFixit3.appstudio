let pickCalculator = prompt('Type Car or Home to pick a type of calculator');
for (var i=0; i < pickCalculator.length; i++){
if(pickCalculator == 'Car' || pickCalculator == 'car'){
  loanPrompt = prompt('Enter your loan amount e.g 30000')
  monthPrompt = prompt('Enter how many months this loan is for e.g 60')
  intrestPrompt = prompt('Enter your interest rate e.g 3% -> 1.03')
  function carLoanPayment(loanAmount, monthAmount, interestAmount){
    return `A car loan for $${loanPrompt} over ${monthPrompt} months at ${intrestPrompt} intrest would have a monthly payment of $` + loanAmount/monthAmount*interestAmount;
  }
}else if(pickCalculator == 'Home' || pickCalculator == 'home'){
homeLoanPrompt = prompt('Enter your loan amount e.g 200000')
yearPrompt = prompt('Select 15 or 30 year morgage')
homeIntrestPrompt = prompt('Enter your interest rate e.g 5.7% -> 1.057');
function homeLoanPayment(homeLoanAmount, homeYearAmount, homeInterestAmount){
  return `A home loan for $${homeLoanPrompt} over ${yearPrompt} years at ${homeIntrestPrompt} intrest would have a monthly payment of $` + homeLoanAmount/homeYearAmount*homeInterestAmount/12;
}
}

var carLoanPayment = carLoanPayment(`${loanPrompt}`,`${monthPrompt}`,`${intrestPrompt}`);
  alert(carLoanPayment) 
// since second variable homeLoanPayment is below carLoanPayment when attempting to do the homeL
var homeLoanPayment = homeLoanPayment(`${homeLoanPrompt}`,`${yearPrompt}`,`${homeIntrestPrompt}`);
  alert(homeLoanPayment);
}
  