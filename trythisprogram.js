function exampleFunction()
{
    if(true)
    {
        var functionScopedvar = "i am function-scoped";
        let blocksopedvar = "i am block-scoped";
        const blocksopedconst = "i am constant";
    }

    console.log(functionScopedvar);
    console.log(blocksopedvar);
    console.log(blocksopedconst);

    
}

exampleFunction();