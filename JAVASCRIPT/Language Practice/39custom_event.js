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
