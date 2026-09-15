// call apply bind
// these are 3 ways to call function, to consider (object) as a (this)

const obj = {      
    name:"roshan",
    age: 22
}

function abcd(){   
    console.log(this);
}
// abcd.call(obj);     // Object | fn call karte time jo dalenge this whi type ka hoga
// abcd.call(12);      // Number |  fn call karte time jo dalenge this whi type ka hoga
// abcd.call("rosh");  // String | fn call karte time jo dalenge this whi type ka hoga

// if function has parameter
abcd.call(obj,1,2,3);   
// fn.call(this_type, parameters)


// apply me call ke time (this_type, array[])  , array in the form of parameters
// abcd.apply(obj,[1,2,3]);
// fn.apply(this_type, array);


// bind function ko, ek naya function me convert kr deta hai, jisko hum baad me chala sakte hai

// ye abhi nahi chalega pehle hame isse ek variable me store karna padega
const baadMeChalaneKeLiyeFunction = abcd.bind(obj);     // abcd function ko, bind lagake, argument me object de rhe h, to this ki value obj aa jayegi
baadMeChalaneKeLiyeFunction();   // ab ye this ki value obj dega 
// abcd()   // normally, ye window dega, without bind, without( obj as argument)
