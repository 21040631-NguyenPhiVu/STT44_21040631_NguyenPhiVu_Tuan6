let markMass1 = 78; 
let markHeight1 = 1.69; 
let johnMass1 = 92; 
let johnHeight1 = 1.95; 

function calculateBMI(mass, height) {
    return mass / height**2;
}

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

document.write(`Data 1: Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}<br>`);

if (markBMI1 > johnBMI1) {
    document.write(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!<br>`);
} else {
    document.write(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!<br>`);
}

let markMass2 = 95; 
let markHeight2 = 1.88; 
let johnMass2 = 85; 
let johnHeight2 = 1.76; 

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

document.write(`Data 2: Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}<br>`);

if (markBMI2 > johnBMI2) {
    document.write(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!<br>`);
} else {
    document.write(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!<br>`);
}
