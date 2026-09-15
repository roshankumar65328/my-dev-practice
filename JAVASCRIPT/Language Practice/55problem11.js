console.log("testing...");
//  DEVELOPER PROBLEM 

//  Debugging a TypeError: Cannot read property 'X'of undefined:

var obj = {};
obj.name    // first time galti maaf no error
// obj.name.first   // error of first is not defined

// write in this way
obj?.name?.first   // it checks if available then give, if not then 'No Problem'

