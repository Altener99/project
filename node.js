function exampleFunction()
{
    if(true)
    {
        //let blocksopedvar = "nah i'd win";
        let functionScopedvar ="I am function-scoped";
    }
    //console.log(blocksopedvar);
    console.log(functionScopedvar);
}

exampleFunction();

console.log(functionScopedvar);
//console.log(blocksopedvar);

