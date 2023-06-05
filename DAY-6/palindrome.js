var isPalindrome = function(x) {
    let rem;
    let rev = 0;
    let temp = x;
    while (x > 0) {
        rem = x % 10;
        rev = ((rev * 10) + rem);
        x = Math.floor(x / 10);
    }
    
    if (rev == temp) {
        return true;
    }
    return false;
};
let ans = isPalindrome(121);
console.log(ans);