// sochte jana hai, karte jana hai, apne aap chize hone lagegi

var people = document.querySelector(".people")
var pers;
var input = document.querySelector("input")
var data = [
    { name: "Roshan", src: "zimage1.jpg" },
    { name: "Noni", src: "zimage2.jpg" },
    { name: "Rohan", src: "zimage1.jpg" },
    { name: "Khalnayak", src: "zimage2.jpg" }
]


pers = ""
data.forEach(function (elem) {
    pers += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h3>${elem.name}</h3>
    </div>`
})
people.innerHTML = pers;

input.addEventListener("input", function () {
    var sortedPeople = data.filter(function (e) {
        return e.name.startsWith(input.value)
    })

    var newPeople = "";
    sortedPeople.forEach(function (elem) {
        newPeople += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h3>${elem.name}</h3>
    </div>`
    })
    document.querySelector(".people").innerHTML = newPeople
})
