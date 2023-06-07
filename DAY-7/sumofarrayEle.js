const checkSum = (nums)=>{
    let sum = 0;
    let result = [];
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        result[i] = sum; 
    }
    return result;
};
let nums = [1,2,3,4];
let ans = checkSum(nums);
console.log(ans);