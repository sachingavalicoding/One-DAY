let revNum = (x) => {
    let check = 1;
    if(x < 0){
        x = x * (-1);
        check = 0;
    }
    let rem;
    let rev = 0;
    while (x > 0) {
        rem = x % 10;
        rev = ((rev * 10) + rem);
        x = Math.floor(x / 10);
    }
    if(rev > Math.pow(2,31)){
        return 0;
    }
 
    if(check == 0){

        return (rev * (-1));
    }else{
        return rev;
    }
};
let x = -123;
let ans = revNum(x);
console.log(ans);