//Check if a number is positive, negative, or zero

const numbers = [ -20, 49, 23, 0, -33, 62.5]

function ChechkNumber (numbers){
return numbers.map(num => {
    if (num > 0 ) return "Positive";
    if (num <0) return "Negative";
    return "Zero"

}

);
}
console.log (ChechkNumber(numbers));