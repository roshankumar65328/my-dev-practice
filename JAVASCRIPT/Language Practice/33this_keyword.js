// this keyword meaning is different in different scenarios

// global - window
console.log(this);

// function - window
function abcd(){
    console.log(this);  // window, kyuki fn this ki value global se lega, aur global matlab...
}
abcd();

// method => jab hum object ke kisi key ko function bana de, to wo object hota hai
// method -> object dega, fn object ke ander h, aur object me this ki value object
var obj = {
    name:function(){
        console.log(this);   // ye bhi this ki value object dega, obj ke ander function h na
    },
    age:25,
    email:"example@gmail.com"
}
obj.name();

// function inside method (es5) - window
var obj2 = {
    name1: function(){    // ye object ke ander 1st method h to object dega  , both func function keyword se bane h (es5)
        function childFunction(){    // ye obj ke func ke ander func h to window dega
            console.log(this);
        }
        childFunction();
    }
}
obj2.name1();


// funtion inside method (es6) - object
var obj3 = { 
    name2: function(){     // ye method h to object dega
        const childFunction = ()=>{    // arrow function parent se value lega to ye bhi object dega
        console.log(this);
        }
        childFunction();
    },
    age:12,
    id:1255
 }
obj3.name2();

// constructor function me this ki value - new blank object
function add(){
    console.log(this);
    console.log(this);
}
new add();   // ye window ho jata lekin, call ke time new lagane se ye object ho gaya


// event listener me this ki value - that html element jispe event listener laga hai
document.querySelector("button").addEventListener("click", function (){
    console.log(this);
})

