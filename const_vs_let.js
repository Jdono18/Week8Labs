// Ways of declaring variables and constants in Javascript

// let creates a variable - it can be changed

let school = 'Minneapolis College'
console.log(school)
school = 'Saint Paul College'
console.log(school)
school = 'Metro State'
console.log(school)
school = 'Minneapolis College'
console.log(school)

// What about creating constants
const language = 'Javascript'
console.log(language)

// Why would you make a constant

// If you have data in your program that you know what it is, and you won't change it,
// it is safer to make a constant because you can't accidentally change it

const states = ['Minnesota', 'Wisconsin', 'Iowa']
//states = ['California', 'Oregon'] // error - replacing the data is not allowed
states.push('Michigan')  // we are allowed to modify the array
console.log(states)

// Things to watch out for with constant arrays and objects

const address = {
    number:'1501',
    street: 'Hennepin Avenue',
    city: 'Minneapolis'
}

// address = 1234
// address = {}
// address = {number:100, street: 'Main Street', city: 'Saint Paul'}

// You can modify the object, eg new properties
address.zip = '55401'
console.log(address)

address.street = 'Hennepin Ave'
console.log(address)


// How to choose let vs const
// if you are not sure, use let
// if you know you won't change data, use const
// if you know you need to change data, use let.