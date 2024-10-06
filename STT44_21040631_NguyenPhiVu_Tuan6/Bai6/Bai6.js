const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

document.write(`Tip for a bill of 100: ${calcTip(100)}`); // Expected output: 15

const bills = [125, 555, 44];

const tips = bills.map(calcTip);

const totals = bills.map((bill, index) => bill + tips[index]);

document.write('<br>Bills:', bills);
document.write('<br>Tips:', tips);
document.write('<br>Totals:', totals);
