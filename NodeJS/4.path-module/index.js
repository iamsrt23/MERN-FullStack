const path = require('path')
console.log('Directory Name',path.dirname(__filename)) // Directory Name /Users/spy_dev/webdev/MERN/NodeJS/4.path-module
console.log("Filename",path.basename(__filename)) // Filename index.js
console.log("File Extension",path.extname(__filename)) // File Extension .js


const joinPath = path.join('/user','documents','node','projects')
console.log("Joined Path:",joinPath) // Joined Path: /user/documents/node/projects


const resolvePath = path.resolve('user','document','node')
console.log("ResolvePath:",resolvePath) // ResolvePath: /Users/spy_dev/webdev/MERN/NodeJS/4.path-module/user/document/node

const normalizePath = path.normalize('/user/.documents/../node/projects')
console.log("Normalized Path:",normalizePath)