const goodPair = (nums,target) => {
    let result = [];
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push([i, j]);
                idx++;
            }
        }

    }


    if(idx != 0){
        return result;
    }
    else{
        return -1;
    }

}

let nums = [2, 7, 11, 15];
let target = 9;
let ans = goodPair(nums,target);
console.log(ans);
