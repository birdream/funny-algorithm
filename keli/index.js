const curry = (fn) => {
    if (typeof fn !== 'function') {
        throw Error('No function provided')
    }
    return function curriedFn (...args) {
        // 判断当前接受的参数是不是小于进行柯里化的函数的参数个数
        if(args.length < fn.length) {
            // 如果小于的话就返回一个函数再去接收剩下的参数
            return function (...argsOther) {
                return curriedFn.apply(null, args.concat(argsOther))
            }
        }else {
            return fn.apply(null,args)
        }
    }
}

const multiply = (x,y,z,w) => x * y * z * w;
console.log(curry(multiply)(2)(3)(4)(5))


const curry1 = (fn) => {

    return function _curry(...args) {
        console.log('args: ', args.length);
        console.log('fn: ', fn.length);
        console.log('fn: ', fn.id);
        if (args.length < fn.length) {
            return function(...argsOther) {
                return _curry.apply(null, args.concat(argsOther))
            }
        }

        return fn.apply(null, args);
    }
}

const add = (x,y,z,w) => x+y+z+w;

console.log(curry1(multiply)(1)(2)(3)(4))