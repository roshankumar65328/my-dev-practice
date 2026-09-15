console.log("Roshan / Noni")
        // .container ke ander ka html
console.log(document.querySelector(".container").innerHTML)   // pehla .container ka html/text
console.log(document.querySelector(".box").innerText)     // pehla .box ke ander ka text/html

 
// console.log(document.querySelector(".boxe").outerHTML)   // querySelector means (.boxe) pehli baar jaha bhi mile, jo .boxe hai uska pura html dikhayega
// '<div class="boxe"> Hey i am a  box</div>'

// console.log(document.querySelector(".container").tagName)   // .container ka tag kya hai
// answer will be 'DIV'

// console.log(document.querySelector(".container").nodeName)   // isse tag/element_node kya h dono me usse pta karenge
// answer will be 'DIV'

// console.log(document.querySelector(".container").textContent)   // 'i am container as second element in section'

// use it at Browser's console
// document.querySelector(".container").hidden   // ye check karke false bta dega
// false
// document.querySelector(".container").hidden = true      // for hide the .container
// true
// document.querySelector(".container").hidden = false
// false
// document.querySelector(".boxe").innerHTML = "it has been updated by using dom"
// 'it has been updated by using dom'
// document.querySelector(".boxe").hasAttribute("style")   // hasAttribute checks for the attribute
// false
// document.querySelector(".boxe").getAttribute("style")
// null
// document.querySelector(".boxe").setAttribute("style","display:inline")
// it give "undefined"  but it set the attribute inline

// document.querySelector(".boxe").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// document.querySelector(".boxe").removeAttribute("style")  // this will remove the attribute

// undefined
// document.querySelector(".box").dataset    // dataset jo attributes data- se start h unka object dega
// DOMStringMap {}   // it give DomStringMap with Prototype

// document.designMode ="on"
// 'on'


// dynamically add the elememt without page reload in the webpage
// let div = document.createElement("div");
// div.innerHTML = "text is entered by <b>Dom</b> .container append"
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div)

// dynamically add the elememt without page reload in the webpage
// let span1 = document.createElement("span");
// span1.innerHTML = "text is entered by <b>Dom</b> .box before"
// span1.setAttribute("class","rosh")
// document.querySelector(".box").before(span1)


// insert html, text, element     //  afterbegin,afterend,beforebegin,beforeend
// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterend", "<b>it entered after end of the cont valriable location</b>")
// cont.insertAdjacentText("afterbegin", "roshan  kumar")
// cont.insertAdjacentElement("beforebegin", <b> roshan kuamr </b>)    // this will give error because we can't directly write html element in js, we have to create it first and then insert it
// let b = document.createElement("b")
// b.textContent = "roshan kumar" 
// let cont = document.querySelector(".container")
// cont.insertAdjacentElement("beforebegin", b)    // this will insert the element before the cont variable location

// document.querySelector(".box").remove()    // remove the first element of .box as selected querySelector

console.log(document.querySelector(".container").classList)    // for extract classes DOMTokenList ['container', value: 'container']
console.log(document.querySelector(".container").className)    // for extract classes names container bg-green dibba

// document.querySelector(".container").classList.add("rosh")        //for add,remove class
// document.querySelector(".container").classList.remove("rosh")             ||
// document.querySelector(".container").classList.toggle("dibba")   //toggle reverts the action, if this class active this will make it inactive

var h1 = document.createElement('h1');    // create a element/tag
h1.textContent = "hey";                   // write text on element
h1.classList.add("makeityellow");         // add a class to the element
document.querySelector("body").appendChild(h1);    // show the element on the page


var img = document.createElement("img")
img.src = "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
document.querySelector("body").appendChild(img)
// document.querySelector("body").removeChild(img)    // created child can delete from this method 
