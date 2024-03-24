function multiply(number){
    // Calculate the number of digits, considering negative numbers
  var numberOfDigits = number.toString().includes('-') ? number.toString().length - 1 : number.toString().length;
  // Multiply the number by 5 raised to the number of digits
  return number * Math.pow(5, numberOfDigits);
}
console.log(multiply(5));