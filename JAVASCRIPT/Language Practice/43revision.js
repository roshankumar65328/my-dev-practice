console.log("JavaScript is Running fine");

// javascript is a client side scripting language is used to make pages interactive
// js & nodejs can be used for making backend and js used in frontend for running queries on server database connection, pull the data on client side with the help of MongoDB
// chrome is using js v8 engine to running script on browser
// alert("hello this alert option in js")
// alert("hii")


// console.log('roshan is a efficient dev.');
// var a = 13;
// console.log(a);  // this reponse can use in if/else , (if) for confirm yes & (else) for confirm no
// confirm("are u a dev. ?")    // confirm hame boolean value dega
// let a = prompt("enter first no.")    // prompt hame string value dega
// let b = prompt("enter second no.")
// a = Number(a)
// b = Number(b)
// console.log(a+b);    // without number conversion, a+b will look like your number as string concat -_-


// let a1 = confirm("are u a developer ?")
// if(a1){
//     alert("yes i am !!")
// }else{
//     alert("no i am not !!")
// }

// document.title = "its new title by js"


// var a  = "roshan"
// var b = 5;
// console.log(b + parseInt(a));   // NaN
// let p = null;
// let q = 3;
// let r = "rosh"
// let userid = Symbol("421");   
// console.log(userid);             // Symbol(421)
// let userid2 = Symbol("449988");
// console.log(userid2);               // Symbol(449988)
// let t = true;
// let f = false;
// let Bigint1 = 8383838n;
// console.log(typeof Bigint1);     // bigint



// Ye dono same hain, lekin alag alag object hai
// let obj1 = {
//     name: "roshan"
// }

// let obj2 = {
//     "name": "roshan"
// }


// Kab quotes lagane padte hain?
// Jab key me:
// space ho
// special character ho
// number se start ho
// Tab quotes zaruri hote hain.
// ya fir value me string ho
// let obj = {
//     "full name": "Roshan",
//     "user-age": 22,
//     "123": "number key"
// }


// Function key par normally quotes nahi lagte.
// let obj = {
//     greet: function () {
//         console.log("hello");
//     },
//     name: "roshan"
// }
// console.log(obj);


// Ye shorthand h:
// let obj = {
//     greet() {
//         console.log("hello");
//     }, 
//     name: "rosh"
// }
// console.log(obj);



// Sirf string value ya special key par quotes lagte hain bas.
// let obj = {
//    name: "roshan"          //  string keyword
//    "user-name": "Roshan",    // speacial keyword
//    "user@123": "hello",      // speacial keyword
//    "first name": "Noni"      // speacial keyword
// }


// let objectinjavascript = {
//     name: "roshan",        // string
//     kaam : "developer",    // string
//     daam : 150000          // number
// }


// console.log(objectinjavascript);    // print object
// objectinjavascript.gender = "male";   // it will add a sub-object
// console.log(objectinjavascript);      // print updated object with new sub-object
// objectinjavascript.gender = "not verified by authority";
// console.log(objectinjavascript.gender);   // print sub-object value


// let pq = {
//     a : ["eisha", "noni"],
//     b : function sum(a,b){
//         let sum = a+b;
//         return sum;
//     }
// }
// console.log(pq);


// function grace(marks){
//     while(marks >=28){
//         marks+=2;
//     }
// }


// let marks = prompt("enter the marks of student")
// if(marks >= 28 & marks <=100){
//    console.log("marks is: " + marks);
//    console.log("passed !!");
// }else if(marks >=26 & marks <=27){
//    grace(marks);
//    console.log("marks is: " + marks);
//    console.log("Passed with grace !!");
// }else if(marks >100 || marks <0){
//    console.log("invalid marks !! Contact to concern authority");
   
// }else{
//    console.log("marks is: " + marks);
//     console.log("fail !!");
// }


/* i am 
   multiline comment
   so , you can ignore me
*/


// let c = 24<21 ? console.log("yes it is true") : console.log("it is not true") 

// for(let i =1; i<=10; i++){
//     console.log(i);
// }


// let array1 = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<array1.length; i++){
//     console.log(array1[i] * array1[i]);
// }


// let obj1 = {
//     name: "roshan",
//     age: 21
// }

// for(let key in obj1){
//     let element = obj1[key]
//     console.log(key, element);
    
// }

// for(let key in obj1){
//     if(key === "age" ){
//         console.log(key, obj1[key]);
        
//     }
// }

// let array2 = [2,4,6,8,10]
// for(const val of array2){
//     console.log(val * val)
// }


// let array3 = ["roshan", "prince", "ankesh", "bellavita"]
// for(const val of array3){
//     if(val.length <= 6){
//         console.log(val);
//     }
// }


// array4 = ["roshan", "prince", "ankesh","bellavita"]
// array4.forEach(val=>{
//         if(val.length <= 6){
//         console.log(val);
//     }
// })

// let array6 = [24,53,64,22,73,3,62]
// array6.forEach((val,index)=>{
//     if(val>50){
//         console.log(val,index)
//     }else if(val <50 & val >33){
//         console.log(val)
//     }else{
//         console.log("failed !!");
        
//     }
// })


// let i = 6;
// while(i<=10){
//     console.log(i);
//     i++
// }

// do{
//     console.log("ye ek baar to chalega !!");
//     i++;
// }while(i<5);


// function greet(name){
//     console.log("hello " + name );
//     console.log("how may i help you " + name );
    
// }
// greet("rohan")
// greet("prince")

// function sum(a,b,c=4){
//     return {a,b,c}
// }
// console.log(sum(3,5,8))  // 8 se override ho jayega default value 4 thi, ab 8 jayegi kyuki ye argument/actual value hai
// console.log(sum(3,5))    // default value 4 hi rahega c ki


// let func1 = (val)=>{
//     console.log(val)
    
// }
// func1(34)


// let s = "noni"
// let t = "kumar"
// console.log(s[0]);
// console.log(s[1]);
// console.log(s[2]);
// console.log(s[3]);
// console.log(s.length);

// TEMPLATE LITERALS WITH BACKTICS ( `` )
// console.log(`the person's full name is ${s} ${t}`);     

// console.log(s.toLowerCase)
// console.log(s.toUpperCase)
// console.log(s.slice(1,3));
// console.log(s.replace("n", "R"));
// console.log(s.concat(t));


// CREATE A FAULTY CALCULATOR THAT SAYS   (50% TRUE & 50% FALSE)

// let input1 = prompt("enter first number")
// let operator = prompt("enter operator")
// let input2 = prompt("enter second number")

// let obj = {
//     "+" : "-",
//     "-" : "+"
// } // key  value     hai jaha jo chahiye key ke throw access kr sakte hai 

// function calculator(input1,operator,input2){
//    let random = Math.random();
//     if(random <= 0.5){
//         alert(`${random} if value less than 0.5 it show wrong`)
//         operator = obj[operator]
//         console.log(`result is ${eval(`${input1} ${operator} ${input2}`)}`);
//     }else{
//         console.log(`result is ${eval(`${input1} ${operator} ${input2}`)}`);
//     }
// }
// calculator(input1, operator, input2)


// use of eval function 
// let b1 = 2;
// let b2 = 4;
// let b3 = 6;
// console.log(`${eval(`${b1} + ${b2} + ${b3}`)}`);      // 12  ye string hai
// // console.log(eval(`${b1} + ${b2} + ${b3}`));        // 12 ye number hai
// console.log(`${eval(`${b1} + ${b2}`)}`);        // 6  ye string hai
// // console.log(eval(`${b1} + ${b2}`));          // 6  ye number hai


// let arr = [1,2,3,4,5,6]
// console.log(typeof arr);      // object
// console.log(arr.toString());     // "1,2,3,4,5,6"
// console.log(arr.join(" - "));    // "1 - 2 - 3 - 4 - 5 - 6"
// let arr2 =  arr.pop()      // pop() last element ko remove kar dega aur usko return karega, arr2 = 6
// console.log(arr2);     // 6
// console.log(arr.push("6"));   // push() last me element add kar dega aur new length return karega, arr = [1,2,3,4,5,"6"]
// delete arr[5]     // delete operator se element delete karne par uski jagah empty item ban jata hai, arr = [1,2,3,4,5,empty]
// console.log(arr);    // [1,2,3,4,5,empty]


// let arr3 = [2,4,6,8]
// let arr3new = []
// for(let i = 0; i<arr3.length; i++){
//     arr3new.push(arr3[i] * arr3[i])
// }
// console.log(arr3new);


// arr4 = [1,2,3,4,5,6,7,8,9,10]
// let newarr4 = arr4.map((val)=>{     // map() create a new array
//     return val*2;
// })
// console.log(newarr4);

// arr4 = [1,2,3,4,5,6,7,8,9,10]
// let newarr41 = []
// arr4.map((val)=>{
//     newarr41.push(val)
// })
// console.log(newarr41);
   
   
// arr4 = [1,2,3,4,5,6,7,8,9,10]
// let newarr5 = arr4.filter((val)=>{     // filter() create a new array
//     if(val>5){
//         return val;     // 5 se badi saari value newarra5 me aa jayegi
//     }
// })
// console.log(newarr5);
      
      
// arr4 = [1,2,3,4,5,6,7,8,9,10]
// let newarr51 = arr4.filter((val)=>{
//     if(val<6){
//         return val;
//     }
// })
// console.log(newarr51);


// let arr6 = [3,6,9,12]
// const ans = arr6.reduce((a,b)=>{    // reduce the array
//     return a + b;

// })
// console.log(ans);
// console.log(arr6);


// let arr6 = [3,6,9,12]
// const ans1 = arr6.reduce((a,b)=>{
//     return a - b;
// })
// console.log(ans1);


// document.title = "js se diya gaya title"
// document.body.style.backgroundColor = "lightblue";
// document.body.childNodes  // blank text element sabhi count karega
// document.body.children // count all element
// document.body.firstElementChild.children 
// console.log(document.body.children[0].firstChild)     // firstChild to text hoga, element thodi milega
// console.log(document.body.children[0].firstChild.nextSibling)  // text ke baad jo element h, wo milega
// console.log(document.body.children[0].firstChild.nextElementSibling)  // text ke baad jo actual element h, wo milega
// console.log(document.body.children[0].firstChild.parentElement)  // first parent element de dega
// document.getElementsByClassName("box")
// document.getElementsByTagName("div")
// document.getElementById("bg-yellow")
// document.querySelector(".box")


// function facto(a){
//     let fact = 1;
//     for(let i = 1; i<=a;i++){
//         fact = fact * i;
//     }
//     return fact; 
// }
// console.log(facto(4))

// let arr6 = Array.from(Array(6).keys())   0 se 5 tak ke number dega, arr6 = [0,1,2,3,4,5]
// console.log(arr6.slice(1,));     // 1 se end tak ke number dega, arr6 = [1,2,3,4,5]


// dynamically add the elememt without page reload in the webpage
// let span1 = document.createElement("span");   // iss span1 ko hum .before .after karke add kar sakte hai
// span1.innerHTML = "text is entered by <b>Dom</b> .box before"
// span1.setAttribute("class","rosh")     // class attribute set karne ke liye, jaise hum html me class="rosh" likhte hai
// document.querySelector(".box").before(span1)    // .before karke hum koi tag ko daal sakte hai

// let span2 = document.createElement("span");
// span2.innerHTML = "hello";
// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterend", "<b>hello</b>")       // kisi wriiten tag ko dalne ke liye
// cont.insertAdjacentText("afterend", "roshan")             // kisi wriiten text ko dalne ke liye


// agar 1 container me bahut sare box hai to to 
// dom se jab sare children ko target karenge to HTML collection milega, uspe loop lagane ke liye pehle to usse ek array banana padega
// let boxes = document.querySelector(".container").children
// Array.from(boxes).forEach((e)=>{
//      logic
// })


// event when we click on any element or button then it will do something that is called a event 
// let btn = document.getElementById("btn")
// btn.addEventListener("mouseout", ()=>{
//    document.getElementById("emptyDiv").innerText = "i added by a event";
// })

// teeno event ek sath chal jayenge kyuki same event hai click
// btn.addEventListener("click", function () {
//     console.log("First Event");
// });

// btn.addEventListener("click", function () {
//     console.log("Second Event");
// });

// btn.addEventListener("click", function () {
//     console.log("Third Event");
// });

// document.querySelector("body").addEventListener("mouseover", function(dets){
//    console.log(dets.clientX);
// })


// jo event hum child par lagayenge wo automatic parent par lag jayega, usko rokne ke liye click function chalate time (e) ko pass karenge & e.stopPropagation(); 

// document.body.querySelector(".container1").addEventListener("click",()=>{
//    alert("container is clicked");
// })
// document.body.querySelector(".child-of-container1").addEventListener("click",(e)=>{
//    alert("child is clicked");
//    e.stopPropagation();  // isse uper tak baat nhi jayegi
// })


// for random No. b/w 0 and 10  =  0 + Math.random() * 10
// Math.ceil()  =>  will give integer number of that number
// let value = Math.ceil(0 + Math.random() * 10);  


// for random color generator
// function getRandomColor(){
//    let val1 = Math.ceil(0 + Math.random() * 255);
//    let val2 = Math.ceil(0 + Math.random() * 255);
//    let val3 = Math.ceil(0 + Math.random() * 255);
//    return `rgb(${val1}, ${val2}, ${val3})`
// }
// console.log(getRandomColor());

// let a = setInterval(()=>{
//    document.querySelector(".child-of-container1").style.background = getRandomColor();
// },1000)
// clearInterval(1);  // for stop this interval

// let b = setTimeout(()=>{
//    document.querySelector(".container1").style.background = getRandomColor();
// }, 1000)
// clearTimeout(1);  // for stop this

// function callback(arg){
//    console.log(arg);  
// }

// function fetchData(src, callback){
//    let sc = document.createElement("script")
//    sc.src = src;
//    sc.onload = callback(it came from callback)
//    document.head.append(sc);
// }
// fetchData("src", callback)

// function getData(url, callback){
//    fetch(url)
//    .then(raw => raw.json())
//    .then(result => {
//       callback(result)
//    })
// }

// getData("", function(result){
//    console.log(result);
   
// })


// aisa fn jisme ye ho to resolve krna, ye ho to reject krna 
// promise ka code banate hi apne aap chal jata hai to agar, agar jab chahe tab chale to promise ko function me daal do -_-
// jab tak function ko call nahi karenge promise nhi chalegi

// function wait(){
//       return new Promise((resolve)=>{
//             setTimeout(() => {
//                   resolve()
//             }, 2000);
//       })
// }


// let promise1 =  new Promise((resolve, reject)=>{
//       let a = Math.random()
//       console.log(a);
      
//       if(a>0.5){
//             reject("the value not accepted 1");
//       }else{
//             setTimeout(()=>{
//                   console.log("yes accepted 1");
//                   resolve("roshan as resolve value 1");
//             },1000)
//       }
// })


// let promise2 =  new Promise((resolve, reject)=>{
//       let a = Math.random()
//       console.log(a);
      
//       if(a>0.5){
//             reject("the value not accepted 2");
//       }else{
//             setTimeout(()=>{
//                   console.log("yes accepted 2");
//                   resolve("roshan as resolve value 2");
//             },2000)
//       }
// })

// promise1.then(alert("yes accepted"));
// promise1.catch(alert("not aacepted"));
// promise1.catch(e=>{
//    console.log(e);
// })

// agar sare promise success honge to .then chalega & resolve values ka array banake dega, 1 bhi reject means .catch chalega 
// let a = Promise.all([promise1, promise2])
// a.then((val)=>{
//             console.log(val);  // all settled , return array of resolve values
//       }).catch((err)=>{       // agar koi bhi fail hua to array nahi milega
//             console.log(err);
// })

// // isme resolve ya reject kuch bhi ho, .then hi chalega & status and value ka array of object milega
// let res = Promise.allSettled([promise1, promise2])
// res.then((val)=>{ 
//       console.log(val);    // Does not depend on resolve/reject , return array of object with status & value of promise
// })

// // jo promise sabse pehle resolve ya reject hoga uska hi result dega
// let res1 = Promise.race([promise1, promise2]);
// res1.then((val)=>{
//       console.log(val);    // jo jeeta agar wo resolve hai to , resolve value return karega
// }).catch((val)=>{
//       console.log(val);    // jo jeeta agar wo reject hai to , reject value return dega
// })

// ye jab tak check karega jab tak koi success promise na mil jaye, if all failed then it will return (AggregateError: All promises were rejected)
// let res3 = Promise.any([promise1, promise2])
// res3.then((val)=>{
//       console.log(val);    // jo pehla success resolve value return
// }).then((err)=>{
//       console.log(err);    // if all reject then , aggregate error
// })


// it tries to show promise is success executed
// let p = Promise.resolve([promise1, promise2])
// p.then((a)=>{      // .then will execute only in Promise.resolve( ) , does not depend on promise resolve/reject
//     console.log(a)   // ek array to dega hi , jisme promise{fulfilled:resolve("msg")}, reject wale ka rejected
// })


// Promise.resolve()  ->  ek resolve promise return karega
// Promise.reject()   ->  ek reject promise return karega

// function checkAge(age){
//     if(age >=18 ){
//         return Promise.resolve("Allowed")
//     }else{
//         return Promise.reject("Not Allowed")
//     }
// }



// async function getData() {
//    let response = await fetch('http://jsonplaceholder.typicode.com/posts',{
//       method: "POST",
//       body: JSON.stringify({
//          title: "foo",
//          body: "bar",
//          userId: 1,
//       }),
//       headers:{
//          "content-type": "application/json; charset= UTF-8",
//       },
//    })
// let data = await response.json()
// return data
// }

// async function main(){
//    let data = await getData();
//    console.log(data);
// }

// main() 


// function getNewCard(src, title, cname, views, monthsold, duration){

//    let viewsStr;
//    if(views < 1000){
//       viewsStr = views;
//    }else if(views >=1000 & views<1000000){
//       viewsStr = views/1000 + "K";
//    }else{
//       viewsStr = views/1000000 + "M";
//    }

//    let html = `<div class="card">
//                   <div class="image"> 
//                      <img src="${src}" alt="video thumbnail">
//                      <span class="capsule">${duration}</span>
//                   </div>
//                   <div class="card-content">
//                      <h2>${title}</h2> 
//                      <p>${cname} . ${viewsStr} views . ${monthsold} Months old</p>
//                   </div>
//                </div>`

//     document.querySelector("body").innerHTML += html;
// }
// getNewCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Introduction part 1", "Bulk roshan",  330000, 7, "19:35"); 
// getNewCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Introduction part 2", "Bulk roshan",  120, 4, "50:05"); 


// oops in js

// let obj = {     // object literal way of creating object
//    a : 1,
//    b : "roshan"
// }

// let animal = {    // created a object
//    jumps : true,
//    run : true,
//    fourLeg : true
// }

// let rabbit = {    // created a object
//    eats : true,
// }

// rabbit.__proto__ = animal;  // javascript me object ke ander , prototype object hota h, usme hum koi dusra object daal sakte hai
// console.log(rabbit.jumps);  // true ayega


// class Animal {          // creating a class, class is a blueprint of object, it is a template for creating objects
//    constructor(name){
//       this.name = name
//       console.log("object is created..");
//    }

//    eats(){
//       console.log("kha raha hu");
//    }
//    jumps(){
//       console.log("khodna bhi aata hai mujhe to !!");
//    }
// }

// let a = new Animal("bunny");
// a.eats()
// a.jumps()

// class Lion extends Animal{
//    constructor(name){
//       super(name)
//       console.log("object created & he is a lion...");
//    }

//    eats(){
//       super.eats()
//       console.log("roar i am eating...");
//    }
// }

// let l = new Lion("sheera")
// console.log(l);
// l.eats()
// l.jumps()


// Getter & Setter in js

// class User {
//    constructor(name){
//       this.name = name;
//    }
//    get name(){
//       return this._name;
//    }
//    set name(value){
//       if(value.length<4){
//          console.log(value);
//          console.log("name id too short....");
//          return;     // agar name chhota to name set nhi hua
//       }
//       this._name = value;     // name bada hoga tabhi set hoga nahi to uper hi undefine return ho chuka hai
//    }
// }

// let a = new User("roy");     // ye object banayega, constructor chala, this.name = "roy" gaya to setter chala
// console.log(a.name);     //  undefined   get() getter chalega, lekin abhi name set nahi hua h, isliye undefined aayega

// let user = new User("lie")   // same let a hai
// user = new User("");     //  set() setter chalega , BLANK + 'Name is too short.'
// console.log(user.name);    // get() getter chalega , lekin name set nahi hua h, isliye undefined aayega

// user.name = "roshan"     // set() setter chalega , roshan name set ho jayega
// console.log(user.name);  // roshan , get() getter chalega



// mySelf Terminal

// function randomDelay (){
//    return new Promise((resolve)=>{
//       let timeout = 1+ 4 * Math.random()
//       setTimeout(() => {
//          resolve()
//       }, 500*timeout);
//    })
// }

// async function addItems(val){
//    await randomDelay();
//    let terminal = document.createElement("div");
//    terminal.innerHTML = val;
//    document.body.append(terminal);
// }

// async function main(){

//    let t = setInterval(() => {
//       let last = document.getElementsByTagName("div");
//       last = last[last.length - 1]
//       if(last.innerHTML.endsWith("...")){
//          last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length -3)
//       }else{
//          last.innerHTML = last.innerHTML + "."
//       }
//    }, 100);

//    let text = ["Welcome to MySelf Terminal", "I am Bulk Roshan", "A Web Developer", "I love coding", "I love to learn new things", "I love to help others", "Thank you for visiting my terminal"];

//    for(const val of text){
//       await addItems(val);
//    }
//    await randomDelay()
//    clearInterval(t)
   
// }

// main();



// advance javascript

// function sleeps(){     
//    return new Promise((resolve, reject)=>{    // reject nhi bhi likhenge tab bhi kaam karega
//       setTimeout(()=>{
//          resolve(34)
//       },2000)
//    })
// }

// (async function main(){       // IIFE - Immediately Invoked Function Expression, jo function banate hi apne aap chal jaye, async function isliye banaya taki await use kar sake
//    let a = await sleeps()
//    console.log(a);
//    let b = await sleeps()
//    console.log(b);
// })()

// let [x,y,...rest] = [1,2,3,4,5]     // x=1, y=2, rest = [3,4,5]
// console.log(x,y,rest);

// let obj = {
//    a:11,
//    b:22,
//    c:33
// }
// let {a,c} = obj;     // a=11, c=33
// console.log(a,c);    // a=11, c=33

// function sum(a,b,c){
//    return a+b+c
// }
// let arr = [1,2,3,4,5]
// console.log(sum(...arr));  // 1,2,3


// var niche define, uper use matlab  => undefined       // hoisting
// let/const niche define uper use matlab => error


// houses assign to students in a array
// let a = ['rosh', 'roshan', 'rajshamani', 'roy', 'gangster', 'ambalacant']
// let house = []
// for(const name of a){
//    if(name.length <5){
//       house.push("hufflepuff")
//    }else if(a.length <7 & a.length >=5) {
//       house.push("ravenchaw")
//    }else{
//       house.push("Slytherin")
//    }
// }
// console.log(house);


// local storage in user's browser application
// localStorage.setItem("myname", "roshankumar")
// let rosh = localStorage.getItem("myname")
// console.log(rosh);

// for object storing
// let obj = {
// r: "1",
// s: "2"
// }
// localStorage.setItem("obj", JSON.stringify(obj));
// let getObj = localStorage.getItem("obj");
// console.log(JSON.parse(getObj));


// prompt() statement aise kaam karta hai
// User likhe: "Buy milk" → variable = "Buy milk"
// Cancel dabaye → note = null
// Khali chhod ke OK → note = ""

// if (note) {}
// check karta hai note empty to nahi hai
// note null nahi hai
// ✔ "Hello" → TRUE → code chalega
// ❌ "" / null → FALSE → code skip


// this ki value normal js, normal fn me window
// obj me fn me object
// obj me fn ke ander fn me window (es5)
// obj me fn ke ander arrow fn me object (es6)
// normal fn me new ke sath lagane se blank object, aur usme this ki value blank object hoti hai
// event listener me this ki value wo html element hi hoti hai jisme event listener laga hai


// call apply blind
// function.call(value) // if function has no parameter, then given parameter value type will be this type
// function.call(this_)

// apply is method to call a function which has an array in parameter
// fn.call(this_type, parameters)

// bind is the method by which we can call a function later
// const bindFunction = func.bind(object);  // this ki value object hogi

// Closures -> function that return a function & must use parent variable called closures
// function counter(){
//    var count = 0;
//    return function (){
//       while(count<5){
//          console.log(count);
//          count++;
//       };
//    }
// }
// let res = counter();
// res();


// event Delegation -> parent elem par eventListener lagao then uske andar parameter(evt) leker evt.target.id === "html id" se direct child elem ko target karo
// var a = document.querySelector(".targetParent");
// a.addEventListener("click", (event)=>{
//    if(event.target.id === "signup"){
//       console.log("sign up button clicked");
//    }else if(event.target.id === "login"){
//       console.log("login button clicked");
//    }
// })      


// HOF - Higher Order Functions
// hof - Higher Order Functions
// aisa function jo parameter me (function) accept kare, parent function higher order fn hoga
//  or
// aisa function jo return me function de, it is different from closures- closure must has to use its parent variable


// custom event creation in js 
// const myEvent = new Event("myCustomEvent");
// document.querySelector(".customEvent").addEventListener("myCustomEvent",()=>{
//    alert("event chal gaya !!")
// })
// setTimeout(()=>{
//    document.querySelector(".customEvent").dispatchEvent(myEvent);
// },2000)


// callback function example with fetch api
// function fetchData(url,  callback){
//    fetch(url)
//    .then(raw=> raw.json())
//    .then(result => {
//       callback(result)
//    })
// }
// fetchData("https://jsonplaceholder.typicode.com/posts", function(result){
//    console.log(result);
// })

// using promise 
// function fetchData1(url){
//    return new Promise((resolve,reject)=>{
//       fetch(url)
//       .then(raw => raw.json())
//       .then(result =>{resolve(result)})

//         // .catch(err => reject(err));
//    })
// }
// fetchData1("https://jsonplaceholder.typicode.com/posts")
// .then((result)=>{
//    console.log(result);
// })

//         // .catch((err)=> console.log(err));   // .catch chalega agar fetch me dikkat ayi to

// using async/await
// async function fetchData2(url){
//    let data = await fetch(url)
//    let result = await data.json();
//    console.log(result);

// }    
// async function main(){
//    await fetchData2("https://jsonplaceholder.typicode.com/posts");
// }
// main();


// Generator in Js
// function* generatorFunction(){
//    console.log("1st yield tak chalega");
//    yield 1;
//    console.log("2nd yield tak chalega");
//    yield 2;
//    console.log("3rd yield tak chalega");
//    yield 3;
// }
// let generatorFn = generatorFunction();
// generatorFn.next(); // value: 1  , done: false
// generatorFn.next(); // value: 2  , done: false
// generatorFn.next(); // value: 3  , done: false
// console.log(generatorFn.next()); // value: undefined , done: true


// web workers in JS
// var numbers = Array.from({length:100}, (_,b) => b+1);    // _ is used when we don't want to use the first parameter of the callback function, in this case it is index, b is the value of the array element
// // console.log(numbers);   //  1,2,3,4........100

// const worker = new Worker("43revisionworker.js");
// worker.postMessage(numbers);
// worker.onmessage = (receiveData)=>{
//    console.log(receiveData.data);
// }


// let a = Array.from({length:10},(_,a)=> a+1)     // [1,2,3,4,5,6,7,8,9,10]
// console.log(a);
