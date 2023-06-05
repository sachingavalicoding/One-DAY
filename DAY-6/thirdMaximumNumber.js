const MaxNumber = (nums) => {
    let max = nums[0];
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
        nums[nums.length - 1] = max;
        nums.pop();
        console.log(nums.pop());
    }

    if (idx == 2) {
        return max;
    }

};
let nums = [12, 32, 43, 54, 11, 5, 34];
let idx = 0;
let max = nums[0];
console.log(MaxNumber(nums));