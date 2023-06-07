let nums = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
const sumOfTwoNo = (nums2, nums) => {
    let sum1 = 0;
    nums.forEach(element => {
        sum1 += element;
    });
    let sum2 = 0;
    nums2.forEach(element => {
        sum2 += element;
    });
    return sum1 + sum2;
};
let ans = sumOfTwoNo(nums2, nums);
console.log(` Sum of Two Arrays ${ans}`);