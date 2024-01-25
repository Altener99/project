function parentfunction(name,callback)
{
    setTimeout(callback,1000);
    console.log("Hey " + name);
}

function randomFunction()
{
    console.log("Hey i am callbackfunction");
}

parentfunction("random string",randomFunction);