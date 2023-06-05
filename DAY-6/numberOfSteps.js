//1342. Number of Steps to Reduce a Number to Zero
const NoOfStep = (num)=>{
    let i = 0;
     while(num != 0){
        if(num % 2 == 0){
            num = num / 2;
             i++;
        }
        else{
            num = num - 1;
            i++;
        }
     }
     return i;
};
let num = 14;
let ans = NoOfStep(num);
console.log(ans);