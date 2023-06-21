document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then | Single data
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.json()
//     }).then((data) => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error);
//     })
// }


// Promise Then | Single data | Show data in browser
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.json()
//     }).then((data) => {
//         console.log(data)
//         document.getElementById("id").innerText = data.id
//         document.getElementById("title").innerText = data.title
//         document.getElementById("body").innerText = data.body
//     }).catch((error) => {
//         console.log(error);
//     })
// }


// Promise Then | Multiple data 
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.json()
//     }).then((posts) => {
//         posts.forEach(post => {
//             console.log(post.id);
//             console.log(post.title);
//             console.log(post.body);
//             console.log("--------------\n\n")
//         });
//     }).catch((error) => {
//         console.log(error);
//     })
// }


// Promise Then | Multiple data | Show data in Browser
// function makerequest() {
//     console.log("Button clicked!");
//     fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response.json()
//     }).then((posts) => {
//         let output = document.getElementById("posts")
//         posts.forEach(post => {
//             output.innerHTML += `
//                 <div>Id: ${post.id}</div>
//                 <div>Title: ${post.title}</div>
//                 <div>Body: ${post.body}</div><hr><br>
//             `
//         });
//     }).catch((error) => {
//         console.log(error);
//     })
// }


// Async Await | Single data
// async function makerequest() {
//     try {
//         console.log("Button clicked!");
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         const post = await response.json()
//         console.log(post)
//     } catch(error) {
//         console.log(error)
//     }
// }

// Async Await | Single data | Show data to browser
// async function makerequest() {
//     try {
//         console.log("Button clicked!");
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         const post = await response.json()
//         console.log(post);
//         document.getElementById("id").innerText = post.id
//         document.getElementById("title").innerText = post.title
//         document.getElementById("body").innerText = post.body
//     } catch(error) {
//         console.log(error)
//     }
// }


// Async Await | Multiple data 
// async function makerequest() {
//     try {
//         console.log("Button clicked!");
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if(!response.ok) {
//             throw Error(response.statusText);
//         }
//         const posts = await response.json()
//         posts.forEach(post => {
//             console.log(post.id);
//              console.log(post.title);
//             console.log(post.body);
//             console.log("--------------\n\n")
//         });
        
//     } catch(error) {
//         console.log(error)
//     }
// }


// Async Await | Multiple data | Show data in browser
async function makerequest() {
    try {
        console.log("Button clicked!");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const posts = await response.json()
        let output = document.getElementById("posts")
        posts.forEach(post => {
            output.innerHTML += `
            <div>Id: ${post.id}</div>
            <div>Title: ${post.title}</div>
            <div>Body: ${post.body}</div><hr><br>
            `
        });
        
    } catch(error) {
        console.log(error)
    }
}