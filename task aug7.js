/* 
 -> To understand shadowing in JavaScript, we need to be clear with the scope first.
 -> Scope is a certain section/region of the program where a defined variable can have its existence and can be recognized, 
    beyond that it can’t be accessed.
 -> For example, let and const variables are stored in separate memory space, so it is called block-scoped.
 -> var variables can be accessed outside the block as it is stored in the Global object memory space, hence it is called Global scoped.   

  <<< SHADOWING: >>>
 -> Now, when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable 
    from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable 
    in the memory space. This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ECMAScript 6 
    along with block scoping allows variable shadowing.
*/

// Example code :
var role = "Engineer";
console.log(role);

function displayRole(){
    role = "developer";
    console.log(role);
}

displayRole();
console.log(role);

// output :
// Engineer
// developer
// developer
/*   
 -> Notice how the last line of code (console.log) prints developer yet it’s not inside the function scope. 
    This is a good example of shadowing.
 -> where by the role variable in the global scope has been overwritten by the role in the function scope.
 -> To avoid shadowing, the variable in the function scope should be declared using the var keyword so that
    it becomes accessible to the function only.
*/


// <<< Hoisting using var let and const >>>

var price = "$20";
function getprice()
{
    console.log("original price:",price);
    var price ="$14.99";
    console.log("discount price:",price);
}
getprice();

// output:
// original price: undefined
// discount price: $14.99

let price = "$20";
function getprice()
{
    console.log("original price:",price);
    let price ="$14.99";
    console.log("discount price:",price);
}
getprice();

// output:
// Uncaught ReferenceError: can't access lexical declaration 'price' before initialization

const price = "$20";
function getprice()
{
    console.log("original price:",price);
    const price ="$14.99";
    console.log("discount price:",price);
}
getprice();

// output:
// Uncaught ReferenceError: can't access lexical declaration 'price' before initialization


/*
  <<< DEAD ZONE: >>>
   -> let and const values before they are initialized can cause a "Reference error" because of something called "temporal dead zone" 
   -> accessing a var before it is declared has the result "undefined"
   
  Example :
*/  
   console.log(aVar);  // undefined
   console.log(aLet);  // Reference error
   var aVar = 1;
   let aLet = 2;
/*
   -> In above code let declarations may not be hoisted, since aLet does not appear to exist before it is assigned a value
   -> This is not the case, however - let and const are hoisted ( like var, class and function )
   -> But there is a period space between entering scope and being declared where they cannot be accessed.
   -> This period is the "Temporal Dead Zone (TDZ)"
      ( TDZ ends when aLet is declared, rather than assigned ) 
*/      
