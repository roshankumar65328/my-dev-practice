console.log("roshan")

// write this on console for result of this 
document.body.childNodes   //chilNodes me blank text & sare body ke child wale tag dega
document.body.children   //children me sirf html tag count hoga
document.body.firstElementChild  // ye bhi first html tag ko hi target karega
document.body.firstElementChild.childNodes   // will show the text with html tags
document.body.firstElementChild.children  // will show only html element
document.body.firstElementChild.children[0]   //so on....
document.body.firstElementChild.children[1]  //so on....

document.body.childNodes[0]   // it will count blank space
document.body.childNodes[1]
document.body.childNodes[2]

document.body.children[0]    // it will not count blank
document.body.children[1]
document.body.children[2]


let cont = document.body.childNodes[1]     // it will select container
cont
cont.firstChild     // it select first normal child with count blank
cont.lastChild      // it select last normal child with count blank

cont.firstElementChild    // it select first html tag
cont.lastElementChild     // it select last3 html tag

cont.lastElementChild.style.color = "red"
cont.lastElementChild.style.backgroundColor = "gray"

cont.lastElementChild.parentElement  //last wala movement se pehle wala hi answer hai

document.body.firstElementChild.children[3]
document.body.firstElementChild.children[3].nextSibling    // sibling me text,element sab hoga
document.body.firstElementChild.children[3].previousSibling    // sibling me text,element sab hoga

document.body.firstElementChild.children[3].nextElementSibling   // it count only element

document.body.firstElementChild.children[3].parentElement   // parent element dega

document.body.children[1]   // direct body de childeren[1] dega
console.log(document.body.children[1].rows)   // children[1] rows dega 
