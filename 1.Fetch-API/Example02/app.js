document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then error handling
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("data.json").then((res)=>{
//         if(res.ok){
//             console.log(res);
//             return res.json();
//         }else{
//             throw Error(res.statusText);
//         }
//     }).then((data)=> {
//         console.log(data);
//         console.log(data.name);
//         console.log(data.roll);
//     }).catch((error) => {console.log(error)});
// }


// Showing data in browser using promise and then
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("data.json").then((res)=>{
//         if(res.ok){
//             console.log(res);
//             return res.json();
//         }else{
//             throw Error(res.statusText);
//         }
//     }).then((data)=> {
//         document.getElementById("data").innerText = data.name
//         console.log(data);
//     }).catch((error) => {console.log(error)});
// }


// Async and await error handling
// async function makerequest(){
//     try {
//         console.log("Button clicked!");
//         const res = await fetch("data.json");
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         const data = await res.json()
//         console.log(data)
//         console.log(data.name)
//         console.log(data.roll)
//     } catch(error) {
//         console.log(error);
//     }
// }


// Show data in html
async function makerequest(){
    try {
        console.log("Button clicked!");
        const res = await fetch("data.json");
        if(!res.ok){
            throw Error(res.statusText)
        }
        const data = await res.json()
        document.getElementById("data").innerText = data.roll
        console.log(data)
    } catch(error) {
        console.log(error);
    }
}