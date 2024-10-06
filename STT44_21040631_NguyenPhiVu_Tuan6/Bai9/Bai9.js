const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForeCast = (arr) => {
    const length = arr.length;
    var temp = "";
    for (let index = 0; index < length; index++) {
        const element = arr[index];
        temp += "..." + element + "C in days " + Number.parseInt(index + 1); 
    }
    return temp;
}

document.write(printForeCast(data1))
document.write(printForeCast(data2))