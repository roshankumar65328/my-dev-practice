// custom helps us to create event that is running in our mind 
// like event named "roshan"

// Steps :- how to make
// make event
// attach event to some dom element
// dispatch that event from that dom element


const myEvent = new Event("myCustomEvent");  // target + fuction
document.querySelector(".customEvent").addEventListener("myCustomEvent",()=>{
   alert("event chal gaya !!")
})
setTimeout(()=>{
   document.querySelector(".customEvent").dispatchEvent(myEvent);   // dispatch Event is must, if event is custom, write the variable that used for store the event
},4000)


// const myEvent1 = new Event("eventCode");

// document.querySelector(".btn").addEventListener("eventCode", ()=>{
//    console.log("it came throw the custom tap event");
// })

// document.querySelector(".btn").addEventListener("click", ()=>{
//    document.querySelector(".btn").dispatchEvent(myEvent1)
// })