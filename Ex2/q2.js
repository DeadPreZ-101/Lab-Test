const mixedArray = ["Matrix", 1, true, 2, false, 3];

function multiplyNumbers(mixedArray) {
    let findNumbers = mixedArray.filter(num => Number.isInteger(num));
    let multiply = findNumbers.map(num => num * 5);
    console.log(multiply);
}

multiplyNumbers(mixedArray);
