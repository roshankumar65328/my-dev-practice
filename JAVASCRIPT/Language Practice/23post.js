async function postData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',  // data bhej rahe hai, to method POST hoga, GET hota jab data la rahe hote
        body:JSON.stringify({   // body: jo data bhej rahe hai, .JSON.stringify - server sirf string format me data leta hai
            title:'foo',
            body:'bar',
            userId:1,
        }),
        headers:{  // server ko bata rahe hai ki hum kya bhej rahe hai
            'content-type' : 'application/json; charset=UTF-8',
        },
})  // yaha hamara fetch & POST karna ka kaam ho gya , post me x.json() hame submitted data,id, success msg milega object format me
    let data = await x.json()
    return data
}


async function main(){                // use of async function,allow use of await,await wait till execution
    console.log('Loading modules');
    console.log("Do something else")
    console.log('Load data');

    let data = await postData()     // use of await
    console.log(data);   // hame submitted data,id, success msg milega object format me
    
    console.log('Process Data');
    console.log('Task 2 started...');
}
main()






// postData() function ka structure kuch aisa hota hai function jaisa production website me

// async function postData(url = "", data = {}) {
//     const response = await fetch(url,{
//         method:'POST',   // GET, POST, PUT, DELETE, etc
//         mode: 'cors',  // no-cors, cors, same-origin
//         cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, same-origin, omit
//         body:JSON.stringify(data),
//         headers:{
//             'content-type' : 'application/json; charset=UTF-8',
//         },
//         redirect: 'follow', // manual, follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// })
//     let res = await response.json()  // jo hame perform kiya uska resonse json me convert kiya
//     return res;
// }

// postData("https://jsonplaceholder.typicode.com/posts", { title:'foo', body:'bar', userId:1 })
//     .then((data) => {    // yaha .then iss liye chal rha hai kyuki promise return kar rha hai na ye function || line 52 return res;
//         console.log(data); // JSON data parsed by `data.json()` call
//     });