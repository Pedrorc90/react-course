import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objecto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toEqual( user )


    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Pedro';

        const user = getUsuarioActivo( name )

        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        })

        expect( user.username ).toBe( name )
    })

})