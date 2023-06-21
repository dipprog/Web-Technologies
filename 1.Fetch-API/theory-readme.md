# Fetch API

- Prerequite -->

  - Knowledge of `promise` (Advance Javascript)
  - `async and await`
  - `XMLHTTPRequest` (AJAX call)

- `Promise analogy`:-

In real life, a good analogy for the concept of a promise in JavaScript is ordering food at a restaurant.

Imagine you're at a restaurant, and you want to order a meal. You tell the waiter what you want to eat, and they take your order. At this point, you have made a promise to yourself that you will receive your food at some point in the future.

While the chef is preparing your meal, you don't just sit and wait at the table, doing nothing. You can continue with other activities, such as talking with your friends, reading a book, or checking your phone. You don't need to actively wait for the meal to be ready.

Eventually, when your meal is cooked, the waiter brings it to your table. At this moment, the promise made earlier is fulfilled, and you can enjoy your food.

In this analogy:

- Ordering the meal is similar to creating a promise in JavaScript using the `new Promise()` constructor. It represents an asynchronous task that will eventually complete and provide a result.
- Continuing with other activities while waiting for the meal to be ready represents the non-blocking nature of JavaScript promises. You can perform other tasks while waiting for the promise to resolve.
- Receiving the meal when it's ready corresponds to the fulfillment of the promise, where you get the result or value you were expecting.
- If something goes wrong, such as the chef not being able to prepare your meal, the promise would be rejected, similar to encountering an error or exception.

Overall, the restaurant ordering process provides a relatable analogy for understanding the concept of promises in JavaScript, where you make a request, continue with other tasks, and receive the result when it's ready.

- Fetch API provides an interface for fetching resources( including across the network). It is fimiliar to `XMLHttpRequest`, but the new API provides a more powerful and flexible feature set.

- `fetch()` method:- The fetch() method of the `WindowOrWorkerGlobalScope` mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. The promise resolves to the Response object representing the response to our request.
  It returns a Promise that resolves to a Response object
  Syntax:- `fetch(resource, init)`
  `resource` - This defines the resources that we wish to fetch. It can be URL object, Request Object and URL of resource.
  `init(optional)` - - `method`: The request method, e.g., GET, POST - `headers`: Headers object or an object literal with ByteString values - `body`: Blob, BufferSource, FormData, URLSearchParams, USVString, or ReadableStream object. Note that a request using GET or HEAD method cannot have a body. - `mode`: The mode we want to use for the request, e.g., cors, no-cors or same-origin - `credentials` - `cache` - Example:
  `javascript
    fetch("https://example.com/post", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: body,
        cache: "default"
    });
    `
- `Body.arrayBuffer()` - It returns a promise that resolves with an ArrayBuffer representation of the request body.
- `Body.blob()`- Returns a promise that resolves with a Blob representation of the request body.
- `Body.formData()`- Returns a promise that resolves with a FormData respresentation of the request body. -`Body.json()`- Returns a promise that resolves with a JSON respresentation of the request body. -`Body.text()`- Returns a promise that resolves with a USVString(text) respresentation of the request body.

- A fetch() promise only rejected when a network error is encountered(which is usually when theres's a permissions issue or similar). A fetch() promise doesnot reject an HTTP errors(404, 500, etc).Instead, a then() handler must check the Response.ok and/or Response.status properties.
