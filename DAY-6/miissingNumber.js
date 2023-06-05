let missingNumber = (nums) => {
    let arrSum = 0;
    let size = nums.length + 1;
    // fisrt get totol sum of numsay 

    for (let i = 0; i < nums.length; i++) {
        arrSum = arrSum + nums[i];
    }
    console.log(arrSum);
    console.log(sum);
    return sum - arrSum;
};


let nums = [3, 0, 1];

let ans = missingNumber(nums);