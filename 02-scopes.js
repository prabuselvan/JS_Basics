// 'use strict'

// Lexical Scoping
var x = 1; // global scope is available throughout the code;

console.log('x is global ',x);



function outer() {
// hoisting --> before any function executes, variables will be declared with var y= undefined;
console.log('Hello from outer function ');
    // 'use strict'
    var y = 2; // y is scoped to outer function. y cannot be used outside of this function 
// every function creates the function scope

    let y=10;

    a=4; // if we declare variable with out var, var a is declared as global scope;
    console.log('x in outer function scope ',x)
    console.log('y in outer function scope ',y)

    function inner() {
        var z=3;
        console.log('inner function');
        console.log('x is inner scope ',x);
        console.log('y is inner scope ', y);
        console.log('z is inner scope ', z);
    }
    inner(); //local function can be used with in outer
}

outer();

console.log('a in global scope ', a);

// inner();
// lexical scoping --identify the scope based on where the identifier is declared

// console.log('y in outer scope ', y) // y cannot be accessed variable will be destroyed after function executes 


// strict mode doesnot allow the user to declare variabled with out identifier.


// before it executed it got compiled