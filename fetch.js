
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
// fetch('https://api.sampleapis.com/beers/ale')
// .then(response => response.json())
// .then(beers => console.log(beers [99]))
// .catch(err => console.error(err))

//GET fetch

function goGetMyBeers() {
    const newBeer = {price : '$7', name: 'Stela', id: 220}

    fetch ('https://api.sampleapis.com/beers/ale')//go and get data API
.then(myResponse => myResponse.json())// formating the response
// .then(allBeers => console.log(allBeers[99].price))//
.then(data => {
    //console.log(data)
    data.push(newBeer) 
    return (data)
}) 
//.catch((myErr) => {console.log('we got an error:',myErr)})
.catch(myErr => console.log('we got an error:',myErr))// shorter way since only 1 funtionand 1 parameter
}

function goGetMyCoffee() {
fetch('https://api.sampleapis.com/coffee/hot')
 .then(myResponse => myResponse.json())// formating the response
 .then(data => {
    //console.log(data)
    return (data[])
})
.catch(myErr => console.log('we got an error:',myErr))// shorter way since only 1 funtionand 1 parameter

}
const beer = goGetMyBeers ()
const coffee = goGetMyCoffee()
 //goGetMyCoffee()
 //goGetMyBeers()

 const goGetMyBeersAndCoffee = [... [coffee], ...[beer]]

 console.log(goGetMyBeersAndCoffee)

// one way to write anonymous
// function (myErr) {
//    return console.log(myErr)
//    console.log('test')// this line will never run
// }

// //arrow function way
// () => {}
// () => {
//     return console.log('test') // explicit return
//     console.log('test') // this code will never run
// }

// () => console.log('test') // implicit return
