const getArr = () => {
    let evenArr = [];
    let oddArr = [];
    nums.forEach(element => {
        if (element % 2 == 0) {
            evenArr.push(element);
        } else {
            oddArr.push(element);
        }
    });
    // print arrays 
    evenArr.forEach(element => {
        console.log(`  ${element}`);
    });
    console.log(" Odd NUmbers");
    
    oddArr.forEach(element => {
        console.log(` ${element}`);
    });

};
let nums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(getArr(nums));


function finds(nums){
  return(nums.find(11));
}

console.log(finds(nums));