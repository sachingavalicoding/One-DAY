const plusOne = (digits) => {
    if (digits[digits.length - 1] == 9) {
        digits[digits.length - 1] = 1;
        digits[digits.length] = 0;
    } else {

        digits[digits.length - 1] += 1;
    }
    return digits;
};
console.log(plusOne([1, 3, 9]));
