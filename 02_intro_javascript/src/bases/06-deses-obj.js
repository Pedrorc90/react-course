
// Desestructuración


const persona = {
    myName: 'Tony',
    age: 45,
    key: 'Ironman',
}

const { myName, age, key } = persona;

// console.log( myName )
// console.log( age )
// console.log( key )


const usingContext = ( { myName, age, key, range = 'Captain' } ) => {
    
    //console.log( myName, age, key, range )
    return {
        nameKey: key,
        anios: age,
        latlng: {
            lat: 12.123,
            lng: 123.123
        }
    }
}


const { nameKey, anios, latlng:{ lat, lng } } = usingContext( persona )
console.log( nameKey, anios )

console.log( lat, lng )