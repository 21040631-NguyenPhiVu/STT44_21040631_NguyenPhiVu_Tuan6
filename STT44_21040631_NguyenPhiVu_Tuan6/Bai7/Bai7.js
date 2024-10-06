const mark = {
    fullName: 'Mark Miller',
    mass: 78, 
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, 
    height: 1.95, 
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

if (markBMI > johnBMI) {
    document.write(`${mark.fullName}'s BMI (${markBMI.toFixed(1)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    document.write(`${john.fullName}'s BMI (${johnBMI.toFixed(1)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(1)})!`);
} else {
    document.write(`Both have the same BMI (${markBMI.toFixed(1)})!`);
}
