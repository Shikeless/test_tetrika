const fs = require("fs");

const array = JSON.parse("[" + fs.readFileSync("./names.txt").toString() + "]");

const sumOfLetters = item => {
    return item.split("").reduce((a, b) => {
        return a + b.toLowerCase().charCodeAt(0) - 96;
    }, 0);
};

console.log(
    array.reduce((a, b, index) => {
        return a + sumOfLetters(b) * (index + 1);
    }, 0)
);
