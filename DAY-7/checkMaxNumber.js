const findMax = ()=>{
    let a = 110;
    let b = 70;
    let c = 90;

    if(a > b && a > c){
        return a;
    }
    else if(b > c && b > a){
        return b;
    }
    else{
        return c;
    }

}

let ans1 = findMax();
console.log(ans1);