// web workers
// normally code ek thread ko diya jata h,
// if code is heavy, then it can be distribute to more than 1 thread by web_workers

// new Worker("worker.js");   // have to write in main.js
// main js file se data, worker file me send karenge,
// worker file me execute karke, again main.js file me send karenge.
// postMessage ek tarika h jisse hum data ko ek file se dusre file me bhejte hai, worker variable ki maddad se 
// onmessage ek expression fn hai jo aaye huye data se khelta hai

var nums = Array.from({length: 100}, (_,b)=> b+1);     // Array.from(source, mappingFunction);   |    {length: 100} -> ye khud numbers 1 se 100 nahi deta. Ye sirf batata hai ki 100 positions chahiye      |      '_'  argument ko represent kar raha hai. Underscore koi special JavaScript keyword nahi hai; ye bas variable ka naam hai. Hum is value ko use nahi kar rahe, isliye _ naam rakha hai. 'b' doosra argument hai, yaani index
console.log(nums);                                     //  kyuki ye map function h (pehli value 0,index 0 => b+1 = 1, go to 1st location, b index = 1)

const worker = new Worker("42worker.js");

worker.postMessage(nums);  // yha se data ()worker.js) par gaya

worker.onmessage = function(data){   // (worker.js) se data yha aaya
    console.log(data.data)
}


//   Iteration _ (current value)	     b (index)        b + 1 (result)
//          1    undefined      	         0               1
//          2    undefined      	         1               2
//          3    undefined      	         2               3
//          4    undefined      	         3               4
//          5    undefined      	         4               5
//         100	 undefined                	99          	100

