const student = {
    firstName: 'Wade',
    shirt: 'magenta',
    hair: 'red',
    glasses: true,
    height: 74,
}

const {height,firstName, hair} = student

console.log(firstName, height)

const alumni = ['Ashley', 'Peter', 'Aurelie', 'Sebas']

const [ash, pet, aur] = alumni
console.log(aur,ash)