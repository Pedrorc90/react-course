

const persona = {
    name: 'Pedro',
    lastName: 'Ramon',
    age: 32,
    address: {
        city: 'Barcelona',
        zip: 18000,
        lat: 12.1234,
        lng: 34.23423
    }
};



const persona2 = { ...persona }
persona2.name = 'Peter'

console.log( { persona } )
console.log( { persona2 } )