let currStatus = document.querySelector(".btn-response")
let currResponse;
document.querySelector(".block-btn").addEventListener("click", ()=>{
    localStorage.setItem("userStatus", "Blocked")
    currResponse = localStorage.getItem("userStatus")
    // console.log(currResponse);
    
    currStatus.innerHTML = currResponse;
})
document.querySelector(".unblock-btn").addEventListener("click", ()=>{
    localStorage.setItem("userStatus", "Unblocked")
    currResponse = localStorage.getItem("userStatus")
    // console.log(currResponse);
    
    currStatus.innerHTML = currResponse;
})
document.querySelector(".btn-response").innerHTML = localStorage.getItem("userStatus")