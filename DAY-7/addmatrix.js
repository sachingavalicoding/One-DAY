let a=[[1,2],
[3,4]];
let b=[[5,6],
[7,8]];
let c=[[0,0],
[0,0]];


console.log(a);
console.log(b);
for(let i = 0; i<=1; i++){
    for(let j =0; j<=1;j++){
         c[i][j] = a[i][j] + b[i][j];
    }
}
for(let i = 0; i<=1; i++){
    for(let j =0; j<=1;j++){
        console.log(c[i][j]);
    }
}
