// js array can store different data type values
var arr = [1,3,4,"eosh",3.4,true];


// var arr1 = [1,2,3,4]
// var arr2 = arr;  // reference ek jageh change dono jageh change
// arr2.pop();  // aisa karne se dono me change ho jayega, hame arr2 me change karna hai

// react me state name ki chiz hoti hai jo values ko mutate/change nhi karne deti
// aur hame yhi sikhna hai ki state ko immutable state me kaise change karenge

// aise spread operator se ho jayega
// var state = [1,2,3,4,5]    // state kuch aisa hota hai jo hum change nahi kar sakte
// var copy = [...state]    // spread operator se hum isse new variable me state ko daal diya , ab new variable me chage karke new array state ko define kr denge
// copy.pop();   // sirf variable copy me se delete hoga

// var state = {name:"roshan", age : 21};   // state inmutable hota h to
// var copy = {...state};   // pehle state ko copy kr liya ,  (...) -> spread operator
// copy.name = "roshani";   // fir copy variable me change kr diya
// state = copy;    // ab inmutable state me copy variable daal diya

// Destructure the value from a Array/Object
// var obj = {name:"roshan", age:21};
// const {age} = obj;

// var obj1 = {
//     name: "noni",
//     age : 21,
//     social : {
//         facebook : {
//             first : "Khalnayak",
//             last : "Kalra"
//         }
//     }
// }

// console.log(obj1.social.facebook.first);
// or
// const {first} = obj1.social.facebook;
// console.log(first);


// var arr3 = [1,"roshan",function(){}]
// const [serial,,func] = arr3;     // const serial = 1, const func = function(){}


// 1 site me different-2 component hote h, like nav, side-bar, main, section, footer, etc. sab ki alag-2 file hoti hai usko combine import-export se hota hai
// navmar -> export
// sidebar -> export
// cart -> export

// main -> import navmar, side-bar, main, section, footer,etc 

// for export the function
// function cart(){  
// }
// export default cart;    // use default for only one thing

// for import the cart function
// import cart from "./script"


// for multiple export use this 
// export function func1 (){
// }

// export function func2 (){
// }

// for multiple import use this 
// import {func1,func2} from "./script"



// arrow function / fat arrow function
const fun1 = ()=>{
    console.log("roshan");
}
fun1();


// fun2, fun3 are same functions
// arraow function / fat arrow function
const fun2 = (val)=>{
    console.log(val);
}
fun2();

// arraow function / fat arrow function with 1 parameter
const fun3 = val=>{
    console.log(val);
}
fun3();

// arrow function / fat arrow function with implicit return -> direct return statement in a function]
const abcd = ()=>12;
// console.log(abcd() + 1);    // 13


// const defg = ()=>{name : "roshan"}
// console.log(defg());  // ye object nhi dega kyuki name: "roshan" ko as a body dekh rha hai object nhi

const defg = ()=>({name : "roshan"})
console.log(defg());  // ye object nhi dega kyuki name: "roshan" ko as a body dekh rha hai object nhi



// map & filter  => both gives a new array
// ye dono array pr chalte hai, aur dono ka kaam h array pr operation karna

// map - har element pr kuch karo & new array me rakho 
// map me return karne se hi, new array me value update hoti hai
var arr1 = [2,4,6,8,10];
console.log(arr1);
const ans = arr1.map(val => val*2);
console.log(ans);


// var state2= [1,2,3,4,5,6,7,8,9];
// let arr2 = [];
// arr2 = state2.map((val2)=>{
//     if(val2>5){
//         val2 +=5;
//     }else{
//         val2 = val2;
//     }
//     return val2;
// })
// console.log(arr2);


// map-filter me 1 farak hai, map sab element deta hai, filter element ko condition ke hisab se kam karta hai
let arr3 = [3,6,9,12,15];
console.log(arr3);
let ans3 = [];
ans3 = arr3.filter((val3)=>{
    return val3>9;
})
console.log(ans3);


var arr4 = [
    {name: "roshan", gender:"male"},
    {name: "aanya", gender:"female"},
    {name: "tanya", gender:"female"},
]
const ans4 = arr4.filter((val4)=>{
    return val4.gender === "male";
    
})
console.log(ans4);


var arr5= [
    {product:"iphone", price: 120000},
    {product:"earpod", price: 500},
    {product:"munch", price: 5},
]
const ans5 = arr5.filter((val5)=>{
    return val5.price<20;
})
console.log(ans5);


// setup for ReactJs
// install tabnine extension & sign-in login tabnine to the vsCode , bonus you can download tabnine extension, click on tabnine on screen on bottom and sign-in and copy auth-token from tabnine site and in vs-code (ctrl + shift + p) then select tabnine continue with auth token
// install prettier
// install node ltx version recommended
// pehle react ke app hum create react app ke throu banate the, matlab react app likhne ke liye setup karna padta hai, kyuki rect sikhne ke liye next js lagegi, aur hame sirf react sikhni hai abhi to hum ek famous tool use karenge  ->  'vite'
// setup vite  - go vite website, copy this " npm create vite@latest " to cmd in relevent folder
//                                          Select the technology 
//                                          run the relevent command for setup
//                                          jo project folder me node_modules folder hai, usme react ke behind the scene wali chize hai
//                                          jo project folder me public folder hai, usme static file ayegi jaise, photo, video, etc.
//                                          jo project folder me src folder hai, usme asset/ folder h, usme bhi photo, video, etc.
//                                          src folder me direct ander, src ke bahar hum css, js, jsx, etc main files ayengi.
//                                          run the project - npm run dev

// react ka code to likha hua hota hai uspe apna feature banana hota hai hame 
// wo likha hua code hum 'vite' se leke ayenge
// vite setup ke baad jo code hame milega usme 
// node module folder = react ko behind the seen jo chahiye support ke liye 
// public folder = isme static assets ayenge (photo, video, svg, etc)
// src folder me asset folder = isme bhi assets rakh sakte hai
// css, js, jsx, etc files for develop app


// react me component ka kaam hota h kuch return karna jsx ki form me 

// jsx is actually similar to the html, but instead of using html tags, we use jsx tags.
// but jsx has Some SuperPowers, jsx sirf dikhta hai html ki tarah, but jsx is going to convert into React.createElement
// html = <h1> hey roshan </h1>
// jsx  = <h1> hey roshan </h1>

// html = <h1> hey roshan {2+2}</h1>  html will give <h1> hey roshan {2+2} </h1>
// jsx  = <h1> hey roshan {2+2}</h1>  jsx  will give <h1> hey roshan 4 </h1>


// react component is a reusable piece of code
// jaise insta post me post container or story circle similar for everyone, but real data is different for everyone
// 1 component banaya usse hi replicate kr diya hai
//  technically component ek function hai, jo .jsx file me hota hai, jo jsx data deta hai


// agar hum vite/ core react ko tailwind ke sath project banana chahte h to , go search 'tailwind css' and open tailwind css find doc -> vite , project setup for scrach se vite & tailwind
// setup, if you have project folder if you earlier setup vite from vite site then starts with 'npm install tailwindcss @tailwindcss/vite' for tailwind css and add some lines in project 
// for use tailwind css

