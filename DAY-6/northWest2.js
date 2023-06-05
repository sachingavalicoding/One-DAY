let matrix = [
    [9,6,0],
    [5,1,0],
    [3,2,4],
    [7,5,2]
];
let demand = [25,10,15];
let supply = [5,20,10,15];

let DeIdx = 0;
let SuIdx = 0;
let result = [];
let row = 0;
let col = 0;

for(let i = 0; i < demand.length; i++){
    for(let j = 0; j <supply.length; j++){
        let num = matrix[row][col];
           if(num){
             if(demand[DeIdx] > supply[SuIdx]){
                 let temp = supply[SuIdx]; 
                supply[SuIdx] = supply[SuIdx] - supply[SuIdx];
                demand[DeIdx] = demand[DeIdx] - temp;
                result.push(matrix[i][j] * temp);
                row++;
             }
             else{
                let temp = demand[DeIdx];
                demand[DeIdx] = demand[DeIdx] - temp;
                supply[SuIdx] = supply[SuIdx] - temp;
                result.push(matrix[i][j] * temp);
                col++;
             }
           }
    }
}

console.log(demand);
console.log(supply);
console.log(result);