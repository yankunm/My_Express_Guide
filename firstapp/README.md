# First App in Express

## Getting Started 

*[Express Documentation](https://expressjs.com/en/5x/api.html)*

To use the express module to create an express app instance, we do:
```
const express = require('express') // a function
const app = express() // an object
```

## Express App Basics

The App object has a variety of methods you can call.

### Listen for incoming request

To listen for incoming request, you do:
```
app.listen(port, () => {
    console.log('Listening')
})
```

### Run something with incoming request

If you want something to run whenever there is a request, doesn't matter where it's going to, you run:
```
app.use(callback)
```
Note: callback will run anytime a request hits this server

### The Request and Response Object

The basic usage of request and response looks like this:
```
app.use((req, res) => {
    // handle request
    // send response
    res.send("Hi");
})
```
* **[Request Object](https://expressjs.com/en/5x/api.html#req)**
* **[Response Object](https://expressjs.com/en/5x/api.html#res)**



























































