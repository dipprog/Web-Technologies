document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest(){
//     console.log("Button Clicked!");
//     const promiseObj =  fetch("data.txt");
//     console.log(promiseObj);
//     promiseObj.then((res)=> {
//         console.log(res);
//         return res.text();
//     }).then((data)=>{
//         console.log(data);
//     });
// }

// function makerequest() {
//     console.log("Button clicked!");
//     fetch("data.txt").then((res)=>{
//         console.log(res);
//         return res.text();
//     }).then((data)=> {
//         console.log(data);
//     });
// }


// function makerequest() {
//     console.log("Button clicked!");
//     fetch("data.txt").then((res)=>{
//         if(res.ok){
//             console.log(res);
//             return res.text();
//         }else{
//             throw Error(res.statusText);
//         }
//     }).then((data)=> {
//         console.log(data);
//     }).catch((error) => {console.log(error)});
// }

// Showing data in browser using promise and then
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("data.txt").then((res)=>{
//         if(res.ok){
//             console.log(res);
//             return res.text();
//         }else{
//             throw Error(res.statusText);
//         }
//     }).then((data)=> {
//         document.getElementById("data").innerText = data
//         console.log(data);
//     }).catch((error) => {console.log(error)});
// }

// Async and Await
// async function makerequest(){
//     console.log("Button clicked!");
//     const res = await fetch("data.txt");
//     console.log(res);
//     const data = await res.text()
//     console.log(data)
// }

// Async and await error handling
async function makerequest(){
    try {
        console.log("Button clicked!");
        const res = await fetch("data.txt");
        if(!res.ok){
            throw Error(res.statusText)
        }
        const data = await res.text()
        console.log(data)
    } catch(error) {
        console.log(error);
    }
}

// Show data in html
async function makerequest(){
    try {
        console.log("Button clicked!");
        const res = await fetch("data.txt");
        if(!res.ok){
            throw Error(res.statusText)
        }
        const data = await res.text()
        document.getElementById("data").innerText = data
        console.log(data)
    } catch(error) {
        console.log(error);
    }
}