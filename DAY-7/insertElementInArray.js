let nums = [23, 43, 53, 4, 53, 4];
const insertEle = (nums) => {
    let element = 34;
    /*     let size = nums.length;
        // insert elements in last index of array 
        for (let i = 0; i <= size; i++) {
            if (i == size) {
                nums[i] = element;
            }
        } */
    // using stack functions 
    /*  nums.push(element); */


    nums.forEach(elements => {
        console.log(elements);
    });
};
console.log(insertEle(nums));