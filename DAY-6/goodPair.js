const goodPair = (nums)=>{
    let num = 0;
     for(let i = 0; i < nums.length;i++){
        for(let j = i; j < nums.length; j++){
            if(nums[i] == nums[j] && i < j){
             num = num + 1;
            }
        }
     }
     return num;
};
let nums = [1,2,3,1,1,3];
let ans = goodPair(nums);
console.log(ans);
