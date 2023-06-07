let nums = [12, 42, -34, 76, -54, 0, 0, 23, -45];
const findElements = (nums) => {
    let zero = 0;
    let pos = 0;
    let neg = 0;
    nums.forEach(element => {
        if (element == 0) {
            zero++;
        }
        if (element > 0) {
            pos++;
        }
        if (element < 0) {
            neg++;
        }
    });
    console.log(` Positive  = ${pos} Negative = ${neg}  Zeros ${zero}`);
};

console.log(findElements(nums));