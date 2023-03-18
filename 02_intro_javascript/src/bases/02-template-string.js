
const myName  = 'Pedro';
const surName = 'Ramon';

//const completeName = myName + ' ' + surName;

const completeName = `${ myName } ${ surName }` 

console.log(completeName)


function getGreeting( myName ) {
    return 'Hola ' + myName
}

console.log(`This is a greeting: ${ getGreeting( myName ) }`)

