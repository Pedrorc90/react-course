import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";


describe('Pruebas en el fichero 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por id', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )

    })

    test('getHeroeById debe retornar undefined si no existe el id', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    })

    test('getHeroesByOwner should return a length of 3 elements in DC', () => {
        const arrHeroes = getHeroesByOwner( 'DC' )
        expect( arrHeroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])

        expect( arrHeroes[0] ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

        expect( arrHeroes.length ).toEqual(3)
    })

    test('getHeroesByOwner should return a length of 2 elements in Marvel', () => {
        const arrHeroes = getHeroesByOwner( 'Marvel' )
        console.log(arrHeroes)
        expect( arrHeroes ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])

        expect( arrHeroes[0] ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })

        expect( arrHeroes.length ).toEqual(2)
    })
})