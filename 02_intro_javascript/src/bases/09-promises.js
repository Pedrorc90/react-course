import { getHeroeById } from "./bases/08-import-export";

// Promises

// const promesa = new Promise( ( resolve, reject ) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2)
//         //resolve( heroe );
//         reject( 'No se pudo entontrar al héroe' )
//     }, 2000);
// });

// promesa
//     .then( ( heroe ) => console.log('Then de la promesa', heroe))
//     .catch( err => console.warn( err ) )

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            const heroe = getHeroeById( id )
            heroe ? resolve( heroe ) : reject( 'No se pudo entontrar al héroe' )
            
        }, 2000);
    });
}

// getHeroeByIdAsync(2)
//     .then( heroe => console.log('Heroe', heroe) )
//     .catch( err => console.warn( err ))

getHeroeByIdAsync(26)
    .then( console.log )
    .catch( console.warn )