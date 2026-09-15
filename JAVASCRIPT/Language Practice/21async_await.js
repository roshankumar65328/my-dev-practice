// this function is given to the below function 
// setTimeout, setInterval, Fetch API, Axion, Promise  =>  async function me await dalke use kiya jata inme

async function getData(){
    // simulate getting data from a server
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500)
    })
}

async function main(){             // use of async function,allow use of await,await wait till execution
    console.log('Loading modules');
    console.log("Do something else")
    console.log('Load data');

    let data = await getData()     // use of await, aur await laga diya to getdata async fn hona chahiye
    console.log(data);
    
    console.log('Process Data');
    console.log('Task 2 started...');
}
main()




// aisa code jisko chalne me time lagta hai, js me usse async code mankar, side stack me daal diya jata hai
// ye sab tabhi use kiye jate hai jab, hum code ko apne time ke hisab se chalana chahte hai


// setTimeout - ye code kuch der baad chalega
// setTimeout(function(){
//     console.log("heera bete 2 sec baad aana")
// },2000)


// setInterval - ye code kuch der baad chalega, baar-baar ek particular interval ke liye
// var count = 0;
// const humarainterval = setInterval(function(){
//     count++;
//     console.log(count);
//     if(count === 4){
//         clearInterval(humarainterval);
//     }
// },1000)


// Fetch API - ye kisi url se data layegaya, ya fir data lekar kisi url par jayega
// fetch(`https://randomuser.me/api/`)   // ye internet se data layega, side stack se
// .then(raw => raw.json())      // data aane ke baad ek variable me, json format me, convert kiya
// .then(readable => console.log(readable))     // ek variable me, dalke console kr diya


// Axios (or other HTTP Libraries) - same as (fetch), it is more friendy to developer
// first we have to get axios cdn from internet, html file me script tag se pehle attach karni hai
// axios.get(`https://randomuser.me/api/`)    // ye data layega, radable form me
// .then(result => console.log(result.data.results[0]))    //  axios me data direct redable form me aata hai


// promises - ye code chalega side stack me & jab code resolve ho jayega tab bata dega 
// const parchi = new Promise(function(resolve,reject){      // yaha hum arrow fn ki jageh traditional fn use kar rahe hai
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())   // aaye data ko raw variable me dala, & usse .json format me convert kiya taki read kr sake 
//     .then(result => {     // json data ko result variable me dala
//         if(result.results[0].gender === "male") resolve();    // data jo ayega usme male/female dono h, male aaya to resolve, otherwise
//         else reject();
//     })
// })
// // console.log(parchi);  // uper wala Promise async fn h to wo to baad me chalega, pehle ye line chalegi aur usme promise {pending} show hoga
// parchi.then(function(){   // agar resolve hua to ye kr do
//     console.log("hara button daba");   // male aaya to
// })
// .catch(function(){   // agar reject hua to ye kr do
//     console.log("laal button daba");    // female aaya to
// })


// Event Loop
// jab main stack khali hota hai to side_stack/callback_queue me se execution ko 1-1 karke main stack me lane ka kaam event loop karta hai

// async function abcd(){
//     let a = await fetch(`https://randomuser.me/api/`)
//     a = await a.json();
//     result console.log(a);
// }
// abcd();