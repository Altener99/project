let x = ( namE , callback) => {setTimeout(callback,1000); console.log("Hey " + namE)} ;

x("randomstring",function(){console.log("hey callback")});
