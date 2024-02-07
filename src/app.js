function withLog(fn) {
    return function (...args) {
        console.log(`invoked function: ${fn.name}`);
        return fn(...args);
    }
}

function sum(x,y) {
    return x + y;
}

const loggedSum = withLog(sum);

console.log(loggedSum(5, 6));