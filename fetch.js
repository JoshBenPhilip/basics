const fetch = require ('node-fetch')

async function getDataAsync(){ 
try{
const response = await fetch('https://api.sampleapis.com/beers/ale')//get -> Promise
const data = await response.json()
console.log(data)
} catch (err) {
    console.error(err)
}
}


// // -----

// fetch('https://api.sampleapis.com/beers/ale')
// .then(
//     (response => { 
//         //do something
//     })
// .catch((err) => {
//     console.error(err)
// })


// // param = is fine if only 1 param no paranthesis needed

// // --------------

// fetch('https://api.sampleapis.com/beers/ale')
// .then((response) => {

// })
