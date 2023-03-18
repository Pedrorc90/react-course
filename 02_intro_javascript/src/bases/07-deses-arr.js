
// Desestructuración

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 )


const retornArr = () => {
    return ['ABC', 123];
}
const [ letras, numeros ] = retornArr();
console.log( letras, numeros )



const usingState = ( value ) => {
    return [ value, () => { console.log('Hola Mundo') } ]
}


const [ nombre, setNombre ] = usingState( 'Goku' )

console.log( nombre )

setNombre()