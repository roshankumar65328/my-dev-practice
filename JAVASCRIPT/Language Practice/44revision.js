// alert("roshan is on alert");
console.log("roshan is on console");
// var a = 12;
// let b = 55;
// let c = "roshan";
// console.log(typeof c);
// var isTrue = confirm("are u comfortable on this chair");
// var age = prompt("enter your age");
// age = Number(age)
// if(age 18){
//     console.log("yes! you can drive");
// }else{
//     console.log("you can't drive");
// }

// document.title = "this is new title from roshan on today";
// document.body.style.backgroundColor = "crimson";
// document.body.style.backgroundColor = "rgb(23,4,224)";


// let k = Symbol("newSym");
// console.log(typeof(k));     // or  // console.log(typeof k) 

// let m = 67586587n;
// console.log(typeof(m));

// let o = {
//     name : "roshan",
//     job : "5600",
//     is_handsome : true
// }
// console.log(o);

// o.newAdded = "this added in obj after creation";
// console.log(o);
// delete o.newAdded;   // for delete a key/value in object
// console.log(o);
// let obj = {
//     a : [1,"rosh","kum",4],
//     b : function sum(a,b){
//         return a+b;
//     },
//     c : {
//         name : "roshan",
//         job : "5600"
//     },
//     d : 12345
// }
// console.log(obj);

// for(const key in obj){
//     const val = obj[key];
//     console.log(key, val);
// } 

// let arr = [2,4,6,8,10];
// for(const val of arr){
//     console.log(val);
// }

// arr.forEach((val, index)=>{
//     console.log(val, index);
// })

// let myVal = 0;
// while(myVal <= 10){
//     console.log(myVal);
//     myVal++;
// }

// let j = 5;
// do{
//     console.log(j);
//     j++;   
// }while(j<=10)


// normal function with function name
// function num (){
//     console.log("5555");
    
// };
// num();

// expression function in a variable
// let n = function(){
//     console.log(5555);
// }
// n();
// num();
// n();

// let str = "rosh kum";
// console.log(str[0]);   // r
// console.log(str[1]);   // o
// console.log(str[2]);   // s
// console.log(str[3]);   // h
// console.log(str[4]);   // space
// console.log(str[5]);   // k
// console.log(str[6]);   // u
// console.log(str[7]);   // m
// console.log(str[8]);   // undefined, because str has only 8 characters, so 8th index is not exist, so it will give undefined
// let firstName = "roshan";
// let lastName = "kumar";
// console.log(`my full name is ${firstName} ${lastName} and i am a good boy`);   // template literal, it is used to concatenate string and variables in a easy way, it is also used to write multi line string
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(firstName.length);
// let array = [1,2,3,4,5];
// console.log(array.length);
// let a = "roshan"
// let b = "kumar"
// console.log(a.slice(1,3));     // os
// console.log(a.concat(b,a));    // roshankumarroshan

// let a = prompt("enter the first number")
// let oper = prompt("enter the oper")
// let b = prompt("enter the second number")

// let getOperator = {
//     "+" : "-",
//     "-" : "+"
// }
// console.log(`${eval(`${a} ${getOperator[oper]} ${b}`)}`)

// console.log(eval(`${1} + ${2} + ${3}`));        // number 6
// console.log(`${eval(`${1} + ${2} + ${3}`)}`);   // string 6


// let arr = [2,4,6,8,10]
// console.log(typeof(arr));   // type of array is object javaScript
// console.log(typeof(null));  // type of null is also the object in javaScript
// console.log(arr);
// console.log(arr.pop());  // poped element dega
// arr.pop()        
// console.log(arr);
// arr.push(10);    // last me push
// console.log(arr);

// arr.shift()  // pehle pe element remove
// console.log(arr);
// arr.unshift(20)      // pehle pe add karega
// console.log(arr);

// console.log(arr.length);

// console.log(arr.sort());
// console.log(arr.sort());

// slice yani nikal ke dega value given index se , given index tak, last index ko chhod ke 
// splice matlab element delete karega given index se , No. of digit delete from array, rest all will be added at the deleted place

// let url = "http://www.google.com/contace/premium"
// console.log(url.split("/"));     //  ["http:","","www.google.com","contace","premium"]

// let arr = [1,2,3]
// let newArr ;
// newArr = arr.map((e)=>{ return e*2})
// console.log(newArr);
// document.body.style.backgroundColor = "red";

// document.body.children[0].children[2].style.backgroundColor = "red";

// let cons = document.body.firstElementChild.children[2]
// console.log(cons.firstChild )    // text milega -> third hello
// document.body.firstElementChild.children[2].nextElementSibling

// let a = document.getElementsByClassName("box");
// console.log(a[2].matches(".third"))      // true

// function facto(num){
//     let arr = Array.from(Array(6).keys())
//     let res = arr.slice(1,).reduce((a,b)=>a * b)
//     return res;
// }
// console.log(facto(5));

// console.log(document.querySelector(".third").hasAttribute(".third"))    // false .third is not attribute, attribute is 'class'
// let a = document.querySelector(".container").children
// console.log(a);

// Array.from(a).forEach((e)=>{
//     e.style.backgroundColor = "red";
// })

// function getRandomColor(){
//     let val1 = Math.ceil((Math.random() * 255));
//     let val2 = Math.ceil((Math.random() * 255));
//     let val3 = Math.ceil((Math.random() * 255));
//     return (`rgb(${val1},${val2},${val3})`);
// }
// console.log(getRandomColor());

// let a = document.querySelector(".container").children
// console.log(a);
// Array.from(a).forEach((e)=>{
//     e.style.backgroundColor = getRandomColor();
// })


// iss tarike se removeEventListener kaam nahi karega kyuki dono anonymous function hai
// document.querySelector(".btn").addEventListener("click", ()=>{
//     document.querySelector(".btn-response").innerHTML = "this is added by the js dom"
// })
// document.querySelector(".btn").removeEventListener("click", ()=>{
//     document.querySelector(".btn-response").innerHTML = "this is added by the js dom"
// })

//  ye kaam karega kyuki baby ko base pasand hai
// document.querySelector(".btn").addEventListener("click", myClickResponse)   // event listener me funciton ko chalane ke liye () ki jarurat nahi hoti
// document.querySelector(".btn").removeEventListener("click", myClickResponse)
// function myClickResponse(){
//     document.querySelector(".btn-response").innerHTML = "this is added by the js dom"
// }

// document.addEventListener("keydown",(e)=>{
//     console.log(e, e.key, e.keyCode)
// })
// document.querySelector("body").addEventListener("mousemove", function(details){
//     console.log(details.clientX)
// });


// document.querySelector(".container").addEventListener("click",()=>{alert("container clicked")})
// document.querySelector(".third").addEventListener("click",(e)=>{
//     alert("third clicked")
//     e.stopPropagation()
// })

// function getData(url, callback){
//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(raw => raw.json())
//  .then(res => callback(res))
// }

// getData("https://jsonplaceholder.typicode.com/todos/1", (e)=>{console.log(e)})


// aisa fn jisme "ye" ho to resolve krna, "ye" ho to reject krna 
// promise ka code banate hi apne aap chal jata hai to agar, agar jab hum chahe tab chale to promise ko function me daal do -_-
// jab tak function ko call nahi karenge promise nhi chalegi
// let setTimeFn = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("yes happened");
//         resolve(1)
//     }, 2000);
// })
// function setTimeFn(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("yes happened");
//             resolve(1)
//         }, 2000);
//     })
// }
// setTimeFn()



// let prom = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a <0.5){
//         resolve(1)
//     }else{
//         reject(0)
//     }
// })
// .then((e)=>{ console.log(e); })
// .catch((err)=>{ console.log(err); })


// let prom1 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a <0.8){
//         resolve(1)
//     }else{
//         reject("reject 1")
//     }
// })
// let prom2 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a <0.8){
//         resolve(2)
//     }else{
//         reject("reject 2")
//     }
// })
// let prom3 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a <0.8){
//         resolve(3)
//     }else{
//         reject("reject 3")
//     }
// })
// let prom4 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a <0.8){
//         resolve(4)
//     }else{
//         reject("reject 4")
//     }
// })


// let promResult = Promise.all([prom1, prom2, prom3, prom4])
// .then((e)=>{console.log(e)})     // sare sucess honge tab, sucess values ka array milega
// .catch((err)=>{console.log(err)})   // agar 1 bhi reject hua, to jaha reject hua uska reject error me mil jayega

// let promAllSettled = Promise.allSettled([prom1, prom2, prom3, prom4])
// .then((e)=>{console.log(e)})    // allSettled me .then hi chalega, isme array of object milega with status & value

// let promRace = Promise.race([prom1, prom2, prom3, prom4])
// .then((e)=>{console.log(e)})      // jo jitega chahe wo resolve ho ya reject uska value milega
// .catch((err)=>{console.log(err)})

// let promAny = Promise.any([prom1, prom2, prom3, prom4])
// .then((e)=>{console.log(e)})    // pehli success resolve promise ki value dega, if all rejected "AggregateError"
// .catch((err)=>{console.log(err)})

// let promResolve = Promise.resolve([prom1, prom2, prom3, prom4])
// .then((e)=>{console.log(e)})     // array confirm dega jisme promise hoga and, fulfilled/rejected & value hogi
// .catch((err)=>{console.log(err)})   // catch kabhi chalega hi nhi, kyuki always pretend resolve


// async function func(){
//     return new Promise((resolve)=>{
//     setTimeout(()=>{
//     console.log("settimeout after 2 seccond");
//     resolve(1)
//     },2000);  
//     })
// }


// async function main(){
//     await func();
//     console.log("after settimeout line");
// }
// main();

// async function getData(){
//    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let data = await x.json()
//    console.log(data)
// }
// getData()


// async function postData(){
//    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method : 'POST',
//     body : JSON.stringify({
//         title : 'foo',
//         body : 'bar',
//         userId : 1,
//     }),
//     headers : {
//         'content-Type' : 'application/json; charset=UTF-8;'
//     },
//    })
//    let data = await x.json()
//    return data;
// }

// async function main(){
//     let result = await postData()
//     console.log(result);
// }
// main()


// async function post(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "post",
//         body: JSON.stringify({
//             title: "foo",
//             body: "arr",
//             userId: 1
//         }),
//         header: {
//             'content-type': 'application/json; charset=UTF-8';
//         }
//     })
//     let resultResponse = res.json()
//     return resultResponse;
// }

// async function main(){
//     let data = await post();
//     console.log(data);
    
// }
// main();

// function addCard(img, heading, paragraph){
//     let item = `<div class="card">
//                     <img src="${img}" alt="">
//                     <h4>${heading}</h4>
//                     <p>${paragraph}</p>
//                 </div>`

//     document.querySelector(".card-container").innerHTML += item;
//     return;
// }

// addCard("https://images.pexels.com/photos/6306235/pexels-photo-6306235.jpeg?h=400&fit=crop&crop=focalpoint&dpr=2", "wecome to card 2", "card 2 paragraph");


// let num1 = prompt("enter your first number");
// let num2 = prompt("enter your second number");

// if(num1.trim() == "" || num2.trim() == ""){
//     throw SyntaxError("your inputs is seems to empty")
// }else{
//     let sum = ((parseInt(num1) + parseInt(num2)));
//     console.log(sum); 
// }

// function divide(a,b){
//     a = parseInt(a)
//     b = parseInt(b)
//     try{
//         if(b === 0 ){
//             throw SyntaxError("b is zero guys");
//         }
//         return a/b;
//     }catch(err){
//         console.log(err.message);
//         return 0;
//     }
// }

// let num1 = prompt("enter your first number");
// let num2 = prompt("enter your second number");
// console.log(divide(num1,num2));


// ek object ke ander dusre object ko kaise dalte hai __proto__ ke throw
// let object = {
//     1: "roshan",
//     2: "prateek",
//     3: "prithvi",
//     4: "goku"
// }

// let bhalu = {
//     run: true,
//     eat: true
// }

// let human = {
//     jump: true,
//     dance: true
// }

// human.__proto__ = bhalu;
// console.log(human.run)


// class ros{
//     constructor(name){
//         this.name = name;
//         console.log(name);
//         console.log("object is created..");   
//     }
//     eats(){
//         console.log("yes eats");
//     }
//     see(){
//         console.log("i can see you");   
//     }
// }

// let non1 = new ros("Ros");

// class mug extends ros{
//     constructor(name){
//         super(name)        
//     }
//     cry(){
//         console.log("i can cry if you don't bring me the chiz"); 
//     }
// }

// let mug1 = new mug("Mug");
// mug1.eats()     // it can use eat() function


// getter setter 
// class getSetName {
//     constructor(name){
//         this.name = name;
//     }
//     set name(value){
//         if(value.length<4){
//             console.log("name is too short , name could't set");
//             return;
//         }
//     this._name = value;
//     }
//     get name(){
//         return this._name;
//     }
// }

// let user1 = new getSetName("ro")
// console.log(user1.name);     // undefine

// agar class ke constructor me (this.name = name;) likha hai to
// agar class me set name() function nahi h to normal name variable me name chala jayega
// agar class me set name() function hai aur    let a = new className("");  kiya    to set name() function chal jayega,
// agar class me get name() function hai aur    console.log(a.name)   kiya to get name() chal jayega



// async function randomDelay(){
//     return new Promise((resolve)=>{
//         let a = Math.random() *4000;
//         console.log(a);
//         setTimeout(() => {
//             a = Math.ceil(a)
//             // console.log(a);
//             resolve()
//         },a);

//     })
// }
// // // randomDelay();

// function addData(val){
//         currData = document.createElement("div")
//         currData.innerHTML = val;
//         document.querySelector(".terminal").append(currData);
// }


// function addingDotExtension(){
//     interval = setInterval(()=>{
//         let last = document.querySelector(".terminal").children;
        
//         last = last[last.length - 1]
//         if(last.innerHTML.endsWith("...")){
//             last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length -3)
//         }else{
//             last.innerHTML = last.innerHTML + "."
//         }
//     },1000)
// }

// let data = ["hello", "i am roshan kumar", "from gurugram haryana"]
// let currData;
// let interval;

// async function terminal(){
//     for(const val of data){
//         addData(val);
//         await addingDotExtension()
//         await randomDelay()

//         // await randomDelay()
//         clearInterval(interval)
//     }

// }

// terminal()




// localStorage.setItem("pen","renolds")
// console.log(localStorage.getItem("pen"));


// localStorage.setItem("obj", JSON.stringify({a: "1", b: "2", c: "3"}))
// console.log(JSON.parse(localStorage.getItem("obj")));






// function addItem(notes, note){
//     notes.push(note)
//     // console.log(note);
//     localStorage.setItem("storageNotes", JSON.stringify(notes))
    
// } 

// function showNotes(){
//     let notes = localStorage.getItem("storageNotes")
//     let cont = document.querySelector(".fetchedNotes")
//     if(notes){
//         notes = JSON.parse(notes)
//     }else{
//         notes = []
//     }
//     // console.log(notes);
//     cont.innerHTML = ""
    
//     notes.forEach((val, index)=>{
//         let p = document.createElement("div")
//         p.innerHTML = `${index}. ${val}`;
//         // console.log(p);
//         cont.append(p)
//     })
// }

// function removeNote(){
//         let notes = localStorage.getItem("storageNotes")
//         notes = JSON.parse(notes);
//         notes.pop();
//         localStorage.setItem("storageNotes", JSON.stringify(notes))
//         showNotes();
//         // console.log(notes);
// }

// function saveNote(){
//     document.querySelector(".add-btn").addEventListener("click", ()=>{
//         let notes = localStorage.getItem("storageNotes")        // localStorage se pucha tere pass abhi storageNotes name se kuch hai kya
//         let note = document.querySelector(".noteField").value
//     if(notes){      // agar hai to  parse karke jo type tha usme de dega
//         notes = JSON.parse(notes)
//     }else{      // agar nhi to ek array bana dega
//         notes = []
//     }

//     addItem(notes,note)    // note aur notes leke add karenge item ko
//     showNotes()      // getItem karke show karwa denge
//     })

    
//     document.querySelector(".rem-btn").addEventListener("click", ()=>{
//         // alert()
//         removeNote();
//     })
// }

// saveNote()
// showNotes()



// console.log(this)       // window
// function newFunc(){
//     console.log(this)   // window
// }
// let obj = {
//     func : function (){
//         console.log(this)   // object
//     }
// }
// obj.func();

// let obj1 = {
//     func1 : function (){
//         function es5func(){
//             console.log(this);  // window
//         }
//     }
// }
// obj1.func1();
// let obj2 = {
//     func2 : function(){
//         let a = ()=>{
//             console.log(this);  // object
//         }
//     }
// }
// obj2.func2();

// function normalFunction(){
//     console.log(this);      // normally window, but -_-
// }
// new normalFunction();  // called with new means, this value of this will be the object

// document.querySelector(".add-btn").addEventListener("click", function (){ console.log(this)})     // eventListener pe this ki value wo html element hota hai



// call fn ko call ke time lagaya jaye to wo this ki value set karta hai
// function func1 (){
//     console.log(this);   
// }

// object = {
//     name: "rosh",
//     age: 22, 
//     roll_no: 221161
// }

// func1.call(object)
// function.call(this_type, parameter)

// function func2 (arr1){
//     console.log(this);
// }
// func2.apply(object, [1,2,3])
// func2.apply(this_type, array parameter)

// function abcd(){
//     console.log("baad wala function");
// }
// const baadKaFunction = abcd.bind(obj);   // same as call but ye hum apne hisab se chalate hai, and this ki value bhi set karte h
// baadKaFunction();



// function demoFunction(name, age){
//     this.name = name;
//     this.age = age
//     console.log(name);
// //     console.log(age);

// }
// demoFunction.prototype.userAge = function (){console.log(this.age)}     // constructor fn ke prototype me fucntion dalke usse effective use kr sakte hai

// let user1 = new demoFunction("roshan", 22)
// user1.userAge()


// closure function function that return a function, the return function should contains the variable of parent function
// function time1(){
//     var a1 = 22;
//     return setTimeout(()=>{
//         console.log(a1);
//     },2000)
// }
// time1();


// document.querySelector(".parent").addEventListener("click", (event)=>{
//     if(event.target.id === "play"){
//         console.log("play the music")
//     }else if(event.target.id === "pause"){
//         console.log("pause the music");
//     }else{}
// })


// function func1(){console.log("its the paramter func of higher order function..");
// }
// function ajeeb(func){
//     func()
//     console.log("it is parent higher order function..");
//     func()
// }
// ajeeb(func1)


// function ajeeb2(){
//     return function (){
//         console.log("higher order function returened fn console")
//     }
// }

// ajeeb2()();     // Pehla () → main fn ko chalayega , Dusra () → returned function ko chalayega
// // or 
// // var func2 = ajeeb2()
// // func2()
// Higher Order Function kehlate hai => setTimeout, addEventListener, map, filter, forEach sab Higher Order Functions ke examples hain.


// let event1 = new Event("customEvent1")
// document.body.addEventListener("customEvent1", ()=>{
//     alert("event happened")
// })
// document.body.dispatchEvent(event1)



// function getDataFromSite(url){
//     return new Promise((resolve)=>{
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => resolve(result))
//     .catch(e=>{ reject(e)})
//     })
// }
// getDataFromSite("https://jsonplaceholder.typicode.com/todos/1")
// .then((resolve)=>{ 
//     console.log(resolve);
// })
// .catch(err=>{console.log(err);
// })



// function greet(){
//     console.log("y");
//     return(1)
// }
// let a = greet;  // a me sirf function ka name save hai, to usse chalana padega jis variable me rakkha hai usse
// a();    // ye chala diya

// let b = greet();
// console.log(b);



// function* generat(){
//     console.log("pehla part of the code");
//     yield 1;
//     console.log("doosra part of the code");
//     yield 2;
//     console.log("tisra part of the code");
//     yield 3;
// }

// let gen = generat();    // ye generat fn ka obj bna dega jisme next() function available hota hai, jisse hum isse control kar sakte hai
// gen.next()                   //  yield 1 tak
// console.log(gen.next());     //  yield 2 tak 
// gen.next()                   //  yield 3 tak 


// const worker1 = new Worker("44revisionworker.js")
// var nums = Array.from(Array(101).keys())
// nums = nums.slice(1,)
// console.log(nums);

// worker1.postMessage(nums)
// worker1.onmessage = (e)=>{
//     console.log(e.data);
// }

