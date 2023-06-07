/* 2011. Final Value of Variable After Performing Operations */
const findValue = (operations) => {
    let x = 0;
    operations.forEach(element => {
        if (element == '--X' || element == 'X--') {
            x = x - 1;
        }
        else {
            x = x + 1;
        }
    });
    return x;
};

let operations = ["++X","++X","X++"];
let ans = findValue(operations);
console.log(ans);