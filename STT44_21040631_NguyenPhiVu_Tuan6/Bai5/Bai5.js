const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        document.write(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})<br>`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        document.write(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})<br>`);
    } else {
        document.write("No team wins<br>");
    }
};

const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];
const avgDolphins1 = calcAverage(...dolphinsScores1);
const avgKoalas1 = calcAverage(...koalasScores1);
checkWinner(avgDolphins1, avgKoalas1);

const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];
const avgDolphins2 = calcAverage(...dolphinsScores2);
const avgKoalas2 = calcAverage(...koalasScores2);
checkWinner(avgDolphins2, avgKoalas2);
