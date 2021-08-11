function receivesAFunction (callback) {
    return callback();
}

// returnsANamedFunction(function() {return "this brings me pain"});

function returnsANamedFunction(pain) {
    return function cb(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}
// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

// The returnsANamedFunction function should:

// take no arguments
// return a named function

// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function
