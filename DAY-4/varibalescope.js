let  a = 10;
let local = () =>{
    let b = 90;
    console.log(b);
    console.log(a);
};
console.log(b);
console.log(a);

local();
// varible can be define on globlly we use in any whare and also 
// vaibale can be define into localy in pernethesis this is use upto his funcion
// a is varibale define globlay defines b  is use in function local 
// we can't use b on out of function they can throw error 
