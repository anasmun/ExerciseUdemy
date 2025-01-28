const output = fizzBuzz(9);
console.log(output);

function fizzBuzz(input) {

    if (input % 5 === 0 && input % 3 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    }else if (input % 5 !== 0 && input % 3 !== 0){
        return input;
    } else {
        return 'Not a number';
    }
}