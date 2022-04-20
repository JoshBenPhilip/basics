// let cars =['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford', 'Waynecorp']

// console.log (cars[4]) //Lamborghini

// console.log(cars.length) //5

let ourCars = [{
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey'
},{
brand: 'Jeep',
year: 2015,
model: 'Grand Cherokee',
miles: 55_000,
color: 'Black' 
} ]

console.log(ourCars[1].miles)

const {miles, year} = ourCars[0]
const age = 2022 - year
const mileage = miles / age
console.log(mileage +' miles per year')

if (mileage < 10000) {
    console.log('This is a LOW mileage car. (29)')
} else {
    console.log('This is not a LOW mileage car.')
}

(mileage < 10000) 
?   console.log('This is a LOW mileage car. (35) ')
:   console.log('This is not a LOW mileage car.')

const isIt = (mileage < 10000) ? 'is a' : 'is Not a' 

console.log(`This ${isIt} LOW mileage car. (51)`)