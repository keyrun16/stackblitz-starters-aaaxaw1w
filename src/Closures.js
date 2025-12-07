function myCounter() {
    let count = 0;
    return function() {
        return count += 1
    }
}

const counter = myCounter();

console.log(counter())
console.log(counter())
console.log(counter())

