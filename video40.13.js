//Speed limit=70
//5->1 point
//Math.floor(1.3)
//12 points -> suspended
const output = Speed(70);
console.log(output);

function Speed(input) {
    if (input <= 70) {
        return 'ok';
    } else if (input > 70 && input < 150) {
        // You can categorize speeds based on ranges instead of single values
        if (input <= 75) {
            return '1';  // Speeding slightly
        } else if (input <= 80) {
            return '2';  // Speeding moderately
        } else if (input <= 85) {
            return '3';  // Speeding more
        } else if (input <= 90) {
            return '4';  // Excessive speeding
        } else if (input <= 95) {
            return '5';  // Dangerously speeding
        } else if (input <= 100) {
            return '6';
        } else if (input <= 110) {
            return '7';
        } else if (input <= 120) {
            return '8';
        } else if (input <= 130) {
            return '9';
        } else if (input <= 140) {
            return '10';
        } else {
            return '11'; // Very high speed
        }
    } else if (input >= 150) {
        return 'Suspended';
    } else {
        return 'Not valid';
    }
}