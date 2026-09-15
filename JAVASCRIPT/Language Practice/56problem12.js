let cont = document.querySelector(".container")
document.querySelector(".add-btn").addEventListener("click",(e)=>{
    fetch('https://randomuser.me/api/')
    .then(raw => raw.json())
    .then(res => addData(res))
})

function addData(data){
    console.log(data.results[0]);
    
    let image = data.results[0].picture.large
    let firstName = data.results[0].name.first
    let description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eligendi quidem mollitia, incidunt amet eius facilis temporibus deserunt officiis quos"
    let currPerson = `<div class="person">
                        <div class="image">
                            <img src="${image}" alt="">
                        </div>
                        <h3 class="name">${firstName}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eligendi quidem mollitia, incidunt amet eius facilis temporibus deserunt officiis quos.</p>
                 </div>`
    cont.insertAdjacentHTML("beforeend", currPerson)
}