// 5. How many times element presrent in array 
const find = (nums, key) => {
    let count = 0;
    nums.forEach(element => {
        if (key == element) {
            count = count + 1;
        }
    });
    return count;
};
let nums = [12, 43, 53, 123, 42, 123, 412, 12, 12, 12, 32, 43];
let key = 12;
let ans = find(nums, key);
console.log(` ${key} element present in array ${ans} times  `);