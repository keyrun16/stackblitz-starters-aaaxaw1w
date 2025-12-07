let str = "Here is the string for char count";

let obj = {};

for(let s of str) {
    let sL = s.toLowerCase();
    if(obj[sL]) {
        obj[sL] += 1;
    } else {
        obj[sL] = 1;
    }
}

console.log(obj);
console.log('Total count:',Object.keys(obj).length);