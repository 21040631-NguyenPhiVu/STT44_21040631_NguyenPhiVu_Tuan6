function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}

function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    document.write(`Dolphins Average: ${dolphinsAverage.toFixed(2)}<br>`);
    document.write(`Koalas Average: ${koalasAverage.toFixed(2)}<br>`);

    const dolphinsEligible = dolphinsAverage >= 100;
    const koalasEligible = koalasAverage >= 100;

    if (dolphinsEligible && koalasEligible) {
        if (dolphinsAverage > koalasAverage) {
            document.write("Winner: Dolphins<br>");
        } else if (koalasAverage > dolphinsAverage) {
            document.write("Winner: Koalas<br>");
        } else {
            document.write("It's a draw!<br>");
        }
    } else {
        if (dolphinsEligible) {
            document.write("Winner: Dolphins<br>");
        } else if (koalasEligible) {
            document.write("Winner: Koalas<br>");
        } else {
            document.write("No team wins the trophy.<br>");
        }
    }
}

const data1Dolphins = [96, 108, 89];
const data1Koalas = [88, 91, 110];

const dataBonus1Dolphins = [97, 112, 101];
const dataBonus1Koalas = [109, 95, 123];

const dataBonus2Dolphins = [97, 112, 101];
const dataBonus2Koalas = [109, 95, 106];

document.write("Data 1 Results:<br>");
determineWinner(data1Dolphins, data1Koalas);

document.write("<br>Data Bonus 1 Results:<br>");
determineWinner(dataBonus1Dolphins, dataBonus1Koalas);

document.write("<br>Data Bonus 2 Results:<br>");
determineWinner(dataBonus2Dolphins, dataBonus2Koalas);
