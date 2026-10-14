console.log("Roshan Kumar")

// write this on console for result of this 
let nino = document.getElementsByClassName("box")    // it will select all element that has class = box
console.log(nino)  // getElement hame HTML Collection dega

// nino[2].style.backgroundColor = "red"  //ye 2 index wala lega

document.getElementById("redbox").style.backgroundColor = "red"    // ye id ko target karega, aur uska bg red kr dega

// document.querySelector(".box").style.backgroundColor = "skyblue"   //querySelector matlab koi class wagera pe, first occurence only


// this will not work
// document.querySelectorAll(".box").style.backgroundColor = "skyblue"  // querySelectorAll hame NodeList deta hai aurp, .style property HTML Element par hi lagta hai
// we can't use querySelectorAll directly as it select all given term as given(.box) 
// console.log(document.querySelectorAll(".box"))    // querySelector hame NodeList dega


// ye sab HTML COLLECTION denge, matlab inme HTML tag honge,
// HTML Collection pe hum direct forEach loop nahi chala sakte, first convet collection -> Array, Array.from(collection_variable), note - ye teeno live in nature hote hai
// document.getElementsByClassName("box");
// document.getElementsByTagName("div");
// document.body.children 


// Ya spread operator se bhi forEach laga sakte hai
// let boxes = document.getElementsByClassName("box");
// [...boxes].forEach(e => {
//     e.style.backgroundColor = "skyblue";
// });


// 1. HTMLCollection — Live
// Maan lijiye HTML mein 2 boxes hain:
// <div class="box">Box 1</div>
// <div class="box">Box 2</div>

// let boxes = document.getElementsByClassName("box");
// console.log(boxes.length); // 2

// Ab DOM mein ek naya box add karte hain:
// document.body.innerHTML += '<div class="box">Box 3</div>';

// console.log(boxes.length); // 3

// Kya hua? Purana boxes variable dobara assign nahi kiya, phir bhi uski length 3 ho gayi. Kyunki HTMLCollection live hai.

// 2. querySelectorAll() — Static
// Ab wahi example NodeList ke saath dekhiye:
// let boxes = document.querySelectorAll(".box");

// console.log(boxes.length); // 2


// Ab naya box add karte hain:
// document.body.innerHTML += '<div class="box">Box 3</div>';

// console.log(boxes.length); // 2


// Yahan purani NodeList mein ab bhi 2 elements hain, kyunki querySelectorAll() ne selection ke samay ka result store kiya tha.
// Naye element ko select karne ke liye dobara query karna padega:
// boxes = document.querySelectorAll(".box");

// console.log(boxes.length); // 3


// 1. HTMLCollection return karne wale
// Method / Property	Kya select karta hai?
// document.getElementsByClassName("box")	Given class wale elements
// document.getElementsByTagName("div")	Given tag wale elements
// document.getElementsByTagName("*")	Saare HTML elements
// document.forms	Forms
// document.images	Images
// document.links	Links
// document.body.children	Body ke direct child elements
// element.children	Kisi element ke direct child elements
// Yaad rakhein: HTMLCollection mein HTML elements hote hain. Ye collections aam taur par live hote hain aur inmein built-in forEach() method nahi hota.



// ye sab HTML NODELIST denge , matlab isme tag, empty spaces, comments honge
// HTML Nodelist me jyadatar hum direct forEach loop chala sakte hai
// document.querySelectorAll(".box");       // querySelectorAll() returns a static NodeList.
// document.body.childNodes             // childNodes returns a live NodeList.



// 2. NodeList return karne wale
// Method / Property	Kya select karta hai?
// document.querySelectorAll(".box")	CSS selector se match hone wale elements
// document.querySelectorAll("div")	Saare matching div elements
// document.body.childNodes	Body ke saare child nodes
// element.childNodes	Kisi element ke saare child nodes
// element.parentNode.childNodes	Parent ke child nodes
// Yaad rakhein: NodeList mein elements bhi ho sakte hain aur text/comment nodes bhi. Ye method par depend karta hai.
// - querySelectorAll() → Static NodeList
// - childNodes → Live NodeList
// - Modern browsers mein in dono NodeLists par forEach() chala sakte hain.


// this will change the whole bg color
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor = "skyblue"
// })


//do it at console
document.getElementsByTagName("div")     // it will select all div tag
e = document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"))   // check's the given css property with matching property, return boolean value

console.log(e[4].closest("#redbox"))   // kon sa parent iss #redbox ko hold kr raha hai wo aa jayega

console.log(document.querySelector(".container").contains(e[4]))    // it check ye, isko contain karta h ya nhi, return bool value




// bahut achha question hai! Aapka confusion ye hai ki childNodes mein HTML elements ke saath text aur comments bhi hain, toh forEach() un sab par kaise chalega?
// Answer: forEach() ko HTML elements ki zaroorat nahi hoti. Use sirf collection ke items par loop chalana hota hai. Har item element ho, text node ho ya comment node, forEach() sab par chal sakta hai.
// 1. Ek HTML example dekhiye
// <body>
//     <div>Roshan</div>
//     <!-- My comment -->
//     <p>Hello</p>
// </body>


// Ab JavaScript:
// document.body.childNodes.forEach(node => {
//     console.log(node);
// });


// Ismein forEach() har node ko ek-ek karke node variable mein dega.

// 1. Text node
// #text


// <body> ke andar line breaks aur spaces bhi text nodes hote hain.




// 2. Element node
// <div>Roshan</div>


// Is baar node ek HTML element ko refer karega.




// 3. Comment node
// <!-- My comment -->


// Is baar node comment ko refer karega.



// Dhyan dein: browser HTML ko parse karte waqt indentation aur line breaks ke kaaran additional text nodes bhi create kar sakta hai.
// 2. Phir problem kab aayegi?
// Ye code dekhiye:
// document.body.childNodes.forEach(node => {
//     node.style.backgroundColor = "skyblue";
// });


// Ye code error de sakta hai, kyunki text nodes aur comment nodes par .style property nahi hoti.
// Agar sirf HTML elements ka background change karna hai, toh children use kar sakte hain:
// document.body.children.forEach(node => {
//     node.style.backgroundColor = "skyblue";
// });


// Lekin yahan ek naya issue hai: document.body.children HTMLCollection return karta hai, aur HTMLCollection par directly forEach() available nahi hota.
// Isliye correct code:
// Array.from(document.body.children).forEach(node => {
//     node.style.backgroundColor = "skyblue";
// });


// Ya childNodes ke saath sirf element nodes check karein:
// document.body.childNodes.forEach(node => {
//     if (node.nodeType === 1) {
//         node.style.backgroundColor = "skyblue";
//     }
// });


// Yahan nodeType === 1 ka matlab hai ki node ek Element node hai.
// Final concept
// - forEach() → har item par loop chalata hai.
// - childNodes → elements, text nodes aur comments de sakta hai.
// - children → sirf HTML elements deta hai.
// - .style → HTML elements par use karein, text aur comment nodes par nahi.
// Matlab, loop chalne aur uske andar kisi property ko use kar paane mein farq hai. forEach() sabhi nodes par chal sakta hai, lekin har node par .style kaam nahi karega.