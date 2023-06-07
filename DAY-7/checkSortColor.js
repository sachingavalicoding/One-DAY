const sortColor = (color,nums) => {
    /* return color.sort(); */
    let result = [];
    return [nums.sort(), color.sort(), nums.reverse(), Math.max.apply(null,nums), ];
}

const convertArr = (arr) =>{
    return arr.toUpperCase();
  };
let nums = [3, 2, 1, 2, 3, 1, 2, 2, 3];
let color = ["red","green","red","yellow","red","green","green","red","red"];
let ans = sortColor(color,nums);
console.log(ans);