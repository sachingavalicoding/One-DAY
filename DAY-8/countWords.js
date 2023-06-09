const countWord = (str) => {
    let result = [];
    for (let i = 0; i < 20; i++) {
        if (str.charAt(i) == " ")
            result.push(i);
    }
    return result;
};
let str = "Sachin is Good Boy";
let word = 0;
for (let i = 0; i < 20; i++) {

    if (str[i] == " ") {
        word++;
    }
}
console.log(word);
console.log(countWord(str));