const smllEven = (n) => {
    // frist test case 
    if (n % 2 == 0) {
        return n;
    }
    else {
       return 2 * n;
    }
};
let n = 15;
let ans = smllEven(n);
console.log(ans);