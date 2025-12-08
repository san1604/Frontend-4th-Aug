try {
    // TypeError: calling a non-function
    const obj = { name: "John" };
    obj.greet();
    
    // ReferenceError: accessing undefined variable
    console.log(undefinedVar);
    
    // TypeError: accessing property of null
    const data = null;
    console.log(data.value);
    
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type error:", error.message);
    } else if (error instanceof ReferenceError) {
        console.log("Reference error:", error.message);
    } else if (error instanceof SyntaxError) {
        console.log("Syntax error:", error.message);
    }
}
