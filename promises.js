// promises take 2 things in
// new Promise(resolve, reject)
// it takes 2 functions in as parameters
// .fetch calls an api from somewhere esle but under the hood it sets up a promise. it doesn't wait for the fetch to wait.

//

async function getAllCars(){
    return ["dodge", "porshe"]
}

//const prom= new Promise(resolve,reject)

fetch('https://dariedorlus.com')
.then()
.then()
//you can also chain .then()

getAllCars()
.then(data =>{
    console.log(data)
    return data.toString()
    .then(result =>{

    })
})//handles the successfull task
// for '=>' function data is the parameter, it is an anonymous function
.catch(error => {
    console.log(error)
})// handles the unsuccessfull task or error,
