
// let firstName = 'Josh'
let firstName = 'null'
let lastName = 'Philip'

if(firstName){
    console.log(`Hello world, ${firstName}`)
} else if (lastName){
    console.log('My last name is' + lastName)
}
else {
    console.log('Hello world, stranger')
}

let fullName = firstName && lastName ? `My full name is ${firstName} ${lastName}` : 
'You are nameless'
console.log(fullName)

const today = 'Tuesday'

let result = today === 'Monday'? 'Darie is getting paid': 'Darie is broke'
console.log(result)

// switch(fruit){
//     case 'carambola':
//         case 'kiwi':
//             let res = fruit === 'kiwi' ? 'kiwi': 'carambola'
//             console.log('This a ' + res)
//             break
//         case 'banana':
//             console.log('This is a ')

//}
const fruit = ''

switch(fruit){
    case'orange':
    console.log('This is an orange')
    break
    case 'apple':
        console.log('this is my apple')
        break
    default:
        console.log('We are out of fruit')
}


function doSomething(){
    console.log("I am actually Batman")
}
doSomething()

function doSomethingElse(name){
    return `The name is ${name}`
}

const value = doSomethingElse()
console.log(value)

console.log(doSomethingElse("Ritchell"))

function sum(a, b,){
    const result = a + b
    return result
}

let addition = sum(2,7)
console.log('the sum is', addition)

