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
async function makerequest(event) {
    event.preventDefault()
    let title = document.getElementById("title").value
    let body = document.getElementById("body").value
    let userid = document.getElementById("userId").value
    let reactions = document.getElementById("reactions").value
    console.log("Button clicked!");
    try{    
        const response = await fetch("https://dummyjson.com/posts/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "body": body,
                "userId": userid,
                "reactions": reactions
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