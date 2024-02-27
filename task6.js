function curry(fn) {
    return function curried(...args) {
      if (args.length <= fn.length) {
        return fn(...args);
      } else {
        return function (...moreArgs) {
          return curried(...args, ...moreArgs);
        };
       }
    };
  }
  
  // Example usage with a function that adds two numbers
  function add(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(2, 3)); // Outputs: 5
  console.log(curriedAdd(10, 5)); // Outputs: 15