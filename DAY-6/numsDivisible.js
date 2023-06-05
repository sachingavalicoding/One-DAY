let nums = [2, 3, 2, 4, 3];
let numsDivide = [9, 6, 9, 3, 15];
const numsDiv = (nums, numsDivide) => {
    let Min = nums[NewMin];
    let ans = min(nums,0,0);
    let NewMin = ans;
  for(let i = 0; i < numsDivide.length; i++){
      if(ans % numsDivide[i]== 0){
        let result = true;
      }
  }
  return true;
};
const min = (nums,Min,NewMin) => {
    Min = nums[NewMin];
    for(let i = 1; i < nums.length;i++){
        if(Min > nums[i]){
            Min = nums[i];
            NewMin = i;
        }
    }
    return Min;
};

let ans = numsDiv(nums,numsDivide);
console.log(ans);