const replaceCh = (str) => {
    let replace = "a";
    let newCh = "b";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == replace) {
            str[i] = "X";
        }


    }
    console.log(str);
};
let str = " Kya baat hain";
replaceCh(str);