// ek url se data lekar aao & usey console pr show karo
// using callback
function dataFetcher(url, callback){
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        callback(result);
    })
}
dataFetcher("https://randomuser.me/api/", function(result){    // callback fn ko yhi parameter me hi define kr diya
    console.log(result);
})



// using Promise
function dataFetch(url){
    const parchi = new Promise(function (resolve, reject){
        fetch(url)
        .then(raw => raw.json())
        .then(result =>{
            resolve(result);
        })
    })
    return parchi;
}
dataFetch("https://randomuser.me/api/")   // dataFetch parchi leke aa rha hai, (semicolon) nhi lagana call ke time kyuki hum continue karenge aage 
.then(function(result){      //  uper wala fn 1 parchi la rha h iss liye continue ho gya (.then) se
    console.log(result);
})



// using async/await 
async function dataFetchs(url){
    let data = await fetch(url)   // fetch ke time await lagaya
    let result = await data.json();   // data ko json conversion ke time await lagaya
    return result;  // ye 1 async fn ka data de rha h, to isko chalane ke liye ek async function hi chahiye
}
async function again_fn(){  
    const final_data = await dataFetchs("https://randomuser.me/api/")
    console.log(final_data);
}
again_fn();