

// Functions
const saludar = function( name ) {
    return `Hola, ${ name }`; 
}

const saludar2 = ( name ) => {
    return `Hola, ${ name }`; 
}

const saludar3 = ( name ) => `Hola, ${ name }`; 

const saludar4 = () => `Hola mundo`

console.log( saludar('Goku') )
console.log( saludar2('Goku') )
console.log( saludar3('Goku') )
console.log( saludar4() )


const getUser = () => 
    (
        {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
    ) 
    

console.log( getUser() )


// function getActiveUser( name ) {
//     return{
//         uid: 'ABC567',
//         username: name
//     } 
// }

const getActiveUser = ( name ) => ({
    uid: 'ABC567',
    username: name
})


const activeUser = getActiveUser( 'Pedro' );
console.log( activeUser );
