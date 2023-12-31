document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then Post Data
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("https://dummyjson.com/posts/add", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "id": 201,
//             "title": "Fetch API",
//             "body": "I just love fetch API",
//             "userId": 11,
//             "tags": [
//                 "Web"
//             ],
//             "reactions": 10
//         })
//     }).then((response) => {
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })
// }


// Async Await Post Data
async function makerequest() {
    console.log("Button clicked!");
    try{    
        const response = await fetch("https://dummyjson.com/posts/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": "Fetch API1",
                "body": "I just love fetch API1",
                "userId": 11,
                "reactions": 10
            })
        })
        if(!response.ok) {
            throw Error(response.statusText)
        }
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log(error);
    }
}