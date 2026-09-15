// web workers
// normally code ek thread ko diya jata h,
// if code is heavy, then it can be distribute to more than 1 thread by web_workers

// new Worker("worker.js");   // have to write in main.js
// main js file se data, worker file me send karenge,
// worker file me execute karke, again main.js file me send karenge.
// postMessage ek tarika h jisse hum data ko ek file se dusre file me bhejte hai, worker variable ki maddad se 
// onmessage ek expression fn hai jo aaye huye data se khelta hai

var nums = Array.from({length: 100}, (_,b)=> b+1);     // _ iss liye likha h kyuki wha pr pehle se undefined h, undefine is liye h kyuki 100 length ka array banaya h usme abhi kuch nahi h
console.log(nums);                                     //  kyuki ye map function h (pehli value 0,index 0 => b+1 = 1, go to 1st location, b index = 1)

const worker = new Worker("42worker.js");

worker.postMessage(nums);  // yha se data ()worker.js) par gaya

worker.onmessage = function(data){   // (worker.js) se data yha aaya
    console.log(data.data)
}
