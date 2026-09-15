// console.log("console is running");
function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let viewStr
    if(views<1000){
        viewStr = views;
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K";
    }


    let html =`<div class="card">
                    <div class="image">
                        <img width="200" src="${thumbnail}" alt="thumbnail">
                        <div class="capsule">${duration}</div>
                    </div>
                    <div class="text">
                        <h1>${title}</h1>
                        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
                    </div>
                </div>`

    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
    // or 
    // document.querySelector(".container").innerHTML += html;  // innerHTML se bhi html add kar sakte hai, ye purana html & new added with function dono ko show karega
}

createCard("Introduction to Backend | Here we learn queries", "CodeWithHarry", "5060000", "2" , "21:21", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")
createCard("its 3rd tutorial of javascript", "Nino", "50000", "1" , "5:01", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")
