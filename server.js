const express = require("express")
const app = express()
const https = require('https');
const path = require('path');
require('dotenv').config()
const url = require('url')
 

app.use(express.static(path.join(__dirname, 'client/build')));


const apiKey = `${process.env.NASA_APIKEY}`
const baseUrl = 'https://api.nasa.gov/planetary'

app.get("/apod", (req, res) =>{
        
  https.get(`${baseUrl}/apod?api_key=${apiKey}`, (resp) => {
      let data = '';
  
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
      data += chunk;
      res.json(JSON.parse(data))
      });
  
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
      // console.log(JSON.parse(data).explanation);
      });
  
  }).on("error", (err) => {
      console.log("Error: " + err.message);
  });

  
  getHeaders(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`).then((headers) => {
    console.log('x-ratelimit-remaining--', headers['x-ratelimit-remaining'])
  })
  
})



function getHeaders(myURL) {
  const parsedURL = url.parse(myURL)
  const options = {
    protocol: parsedURL.protocol,
    hostname: parsedURL.hostname,
    method: 'HEAD',
    path: parsedURL.path
  }
  let protocolHandler = (parsedURL.protocol === 'https:' ? https : http)

  return new Promise((resolve, reject) => {
    let req = protocolHandler.request(options, (res) => {
      resolve(res.headers)
    })
    req.on('error', (e) => {
      reject(e)
    })
    req.end()
  })
} 



if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, 'client/build'))); 
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })
}


const port = process.env.PORT || 5000


app.listen(port, ()=>console.log(`Server has started on port ${port}`))



//    Demo api call
// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//     // console.log("first console")
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     // console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
