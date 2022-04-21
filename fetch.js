
import fetch from 'node-fetch'

// //let fname;
// async function getDataAsync() { 
// try{
// const response = await fetch('https://api.sampleapis.com/beers/ale')//get -> Promise
// const data = await response.json()
// fname = data[ll].name
// console.log("Hey what's up, " + fname +"?")
// } catch (err) {
//     console.error(err)
// }
// }

// getDataAsync()

// // ----------toddversion .then .catch

// fetch('https://api.sampleapis.com/beers/ale')
// .then((response) => { 
//     return response.json()    //do something
//     })
//     .then(data => {
//         console.log(data [87])
//    // do all the stuff we want to happen AFTER the fetch... always use dot. fetch
// })
// .catch((err) => {
//     console.error(err)
// })


// // param = is fine if only 1 param no paranthesis needed

// // --------------

// tighter version of the above
fetch('https://api.sampleapis.com/beers/ale')
.then(response => response.json())
.then(beers => console.log(beers [99]))
.catch(err => console.error(err))

