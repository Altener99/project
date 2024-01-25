function parentfunction(name, callback)
{
    callback();
    console.log("hey "+name);
}

function randomFunction()
{
    console.log("hey i am callbackfunction");
}

parentfunction("random string",randomFunction);