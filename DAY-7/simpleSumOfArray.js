const simpleSum = (nums, n, sum) => {
    /* 
        if (n == nums.length) {
            return 0;
        }
        simpleSum(nums, n + 1, sum + nums[n]); */


    // using for loop 
    nums.forEach(element => {
        sum = sum + element;
    });
    return sum;
};
let nums = [12, 54, 64, 76, 345, 564];
let n = 0;
let sum = 0;
let ans = simpleSum(nums, n, sum);
console.log(ans);