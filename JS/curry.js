function curry (callback) {

    return function curr(...args){ // args.length === callback.length
        if(callback.length === args.length){
            return callback.apply(this, args)
        }else{
            return function(...args2) {
                return curr.apply(this, [...args, ...args2])
            }
        }
    }
}





const sum = curry((a, b, c, z) => a + b + c + z);

console.log(sum(1)(2)(3)(4)); // 10;
console.log(sum(1)(2)(3, 4)); // 10;
console.log(sum(1)(2, 3, 4)); // 10;