// settle means resove or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData(){
    // simulate getting data from a server
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await x.json()
        return data
}

async function main(){                // use of async function,allow use of await,await wait till execution
    console.log('Loading modules');
    console.log("Do something else")
    console.log('Load data');

    let data = await getData()     // use of await
    console.log(data);
    
    console.log('Process Data');
    console.log('Task 2 started...');
}
main()
