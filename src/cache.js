function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (!cache.has(x)) {
            let result = func(x);
            cache.set(x, result);
        }
        return cache.get(x);
        
    };
}

const cachedSlow = cachingDecorator(slow);

cachedSlow(6);
cachedSlow(6);
cachedSlow(6);
