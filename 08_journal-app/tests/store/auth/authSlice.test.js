import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures"

describe('AuthSlice tests', () => {

    test('Should return initial state and called auth', () => {

        const state = authSlice.reducer( initialState, {} )
        expect( authSlice.name ).toBe( 'auth' )
        expect( state ).toEqual( initialState )

    })

    test('Should do authentication', () => {

        const state = authSlice.reducer( initialState, login( demoUser ) )

        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        })


    })

    test('Should do logout wo args', () => {

        const state = authSlice.reducer( authenticatedState, logout( ) )
        console.log(state)
        expect( state ).toEqual( {
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        } )


    })

    test('Should do logout and show error message', () => {

        const errorMessage = 'Error in logout'
        const state = authSlice.reducer( authenticatedState, logout( { errorMessage } ) )
        expect( state ).toEqual( {
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        } )
    })


    test('Should change the status to checking', () => {
        const state = authSlice.reducer( authenticatedState, checkingCredentials() )
        expect( state.status ).toBe('checking')
    })
})