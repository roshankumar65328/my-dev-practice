// callback ye hota hai ki ye ho jaye, to ye kr dena
// fn banaya jisme parameter link and function liya, jisme jo karne ko kaha tha wo & uske aage ka kaam kya karna hai wo hota h
// ek function jo function ko argument me le, aur uss argument fn ko apne hisab se chalaye = callback

console.log("roshan is a software engineer")
console.log("roshan is becoming success software engineer")


// callback function, in which a fuction is given to another function as parameter/argument
// ex: jaise hum 1 site se data manga rahe hai to 1 fn jo data layega,
// dusra jo data laya hai, uske next line me callback ko chala denge, console ho jayega data


// this function is given to below function as parameter
const callback = (arg)=>{      // this fn parameter will given in below function
    console.log(arg)   // print the argument given to callback
}

const loadScript = (src, callback)=>{     // fn loadscript parameter(src, callback)    // src me hum cdn de rahe h
    let sc= document.createElement("script")     // create script tag
    sc.src = src     //    add src to script tag
    sc.onload = ()=> callback("it came through callback")     // onload means, aftr page loding this will run, call callback on onload of sc
    document.head.append(sc)    // append sc on head
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )


// pehle sab task 1 function me likh lo, fir uss function ko tab chalao jab 1st function ka data aa gya ho
// Syntax
// function doSomethingTask(url,callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result =>{
//         callback()
//     })
// }
// doSomethingTask("some url", function(){

// })

function getData(url,callback){     // iss fn ko 2 argument mile 1 link, 1 fn, jisse ye use kr sakta h
    fetch(url)
    .then(raw => raw.json())
    .then(result =>{
        callback(result)      // callback ko humne tab chalaya jab hamara data aa gya, aur callback ko humne aaya hua data diya, aur callback jo leta h usse console kr rha h(line no.14)
    })
}
getData("https://randomuser.me/api/", function(result){
    console.log(result.results[0].gender,result.results[0].email,result.results[0].name.first);
    
})


// ek time ke baad ye chal jayega
setTimeout(()=>{
    console.log("i am inside setTimeout 1")
}, 1000)  // 1 second ke baad

setTimeout(()=>{
    console.log("i am inside setTimeout 2")
}, 2000)

console.log("console text after this setTimeout declaration")  // par console pehle chal jayega kyuki await thodi hai isme bhai sahab