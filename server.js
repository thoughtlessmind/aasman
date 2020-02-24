const express = require("express")
const app = express()
const https = require('https');
const path = require('path');
require('dotenv').config()
 

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/localtest", (req, res) => {
    const data = [
        {id: 1, firstName: 'Jon', lastName: "Doe"},
        {id: 1, firstName: 'Mary', lastName: "Gol"},
        {id: 1, firstName: 'Dave', lastName: "Patrick"}
    ]

    res.json(data)
})

const apiKey = `${process.env.NASA_APIKEY}`
const baseUrl = 'https://api.nasa.gov/planetary/'

app.get("/testApi", (req, res) =>{
        
  https.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, (resp) => {
      let data = '';
  
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
      data += chunk;
      res.json(JSON.parse(data))
      });
  
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
      });
  
  }).on("error", (err) => {
      console.log("Error: " + err.message);
  });
  
})

// app.get('/headers', (req, res) =>{
//   https(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,{method: 'HEAD'}, (err, res, body) =>{
//     console.log(res.headers)
//   })
// })


if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, 'client/build'))); 
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })
}


const port = process.env.PORT || 5000

// https.get('https://api.nasa.gov/planetary/apod?api_key=gvLAFHhWfMdinBAuKFDs7VbBYNho9c6bHsVzCgRc', (resp) =>{
//   console.log('testCall data', resp.data)
// })


https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
    // console.log("first console")
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    // console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.listen(port, ()=>console.log(`Server has started on port ${port}`))
