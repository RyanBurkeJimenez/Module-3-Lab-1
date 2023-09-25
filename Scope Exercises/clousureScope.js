function outerFunction(){
    let closureVariable = "Closure Scope";
    //This variable is accessible to the
    // inner function due to closure
   
   // console.log(innerFunctionVar);
    return function innerFunction() {
        let innerFunctionVar = "Can't get me"
        console.log(closureVariable);
        //Can access outer function's variables
    }
}

let newFunction = outerFunction();
newFunction(); //Prints "Closure Scope"