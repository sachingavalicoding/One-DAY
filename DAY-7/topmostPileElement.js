const checkPileTopmostele = (nums, k) => {
    let max = nums[0];
    if (nums.length <= 1) {
        return -1;
    }
    
    for (let i = 0; i < k-1; i++) {
        
        if(max < nums[i]){
            max = nums[i];
        }
        nums.shift();
    }
    return max;

}

let nums = [17,61,5,1,44];
let k = 100;
let ans = checkPileTopmostele(nums, k);
console.log(ans);