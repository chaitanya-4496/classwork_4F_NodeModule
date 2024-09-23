const url=require('url')
const address="https://www.google.com/search?q=node+js+url+module&oq=node+js+url+module&aqs=chrome..69i57j0l7.10159j0j7&sourceid=chrome&ie=UTF-8"
const urlObj=url.parse(address,true)
console.log("hostname: "+urlObj.hostname)
console.log("portname: "+urlObj.port)
console.log("pathname: "+urlObj.pathname)
// console.log("query: "+urlObj.query) query
console.log(urlObj)