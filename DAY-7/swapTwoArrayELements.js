let nums = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
const swapTwoArray = (nums, nums2) => {
    let low = 0;
    console.log("  Before Elements in 1st Arrays ");
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
    console.log(" Before  Elements in 2st Arrays ");
    for (let i = 0; i < nums2.length; i++) {
        console.log(nums2[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        nums[i] = nums2[i];
        nums2[i] = temp;
    }
    console.log(" After  Elements in 1st Arrays ");
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
    console.log(" After  Elements in 2st Arrays ");
    for (let i = 0; i < nums2.length; i++) {
        console.log(nums2[i]);
    }
};

let ans = swapTwoArray(nums, nums2);
console.log(ans);