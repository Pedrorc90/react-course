const { render, screen, fireEvent } = require("@testing-library/react")
const { default: LoginPage } = require("../../../src/auth/pages/LoginPage")
const { configureStore } = require("@reduxjs/toolkit")
const { authSlice } = require("../../../src/store/auth/authSlice")
const { Provider } = require("react-redux")
const { MemoryRouter } = require("react-router-dom")
const { notAuthenticatedState } = require("../../fixtures/authFixtures")

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({ email, password }) => mockStartLoginWithEmailPassword({ email, password })
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => ( fn = () => {} ) => fn()
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
    
})

describe('LoginPage Test', () => {

    beforeEach(() => jest.clearAllMocks())

    test('Should show the component properly', () => {

        render( <Provider store={ store }><MemoryRouter><LoginPage /></MemoryRouter></Provider> )

        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1)

    })

    test('Google button should call startGoogleSignIn', () => {

        render( <Provider store={ store }><MemoryRouter><LoginPage /></MemoryRouter></Provider> )

        const googleBtn = screen.getByLabelText("google-btn");
        fireEvent.click( googleBtn );

        expect( mockStartGoogleSignIn ).toHaveBeenCalled()

    })

    test('Submit should call startLoginWithEmailPassword', () => {

        const email = "pedro@gmail.com";
        const password = "123456";
        render( <Provider store={ store }><MemoryRouter><LoginPage /></MemoryRouter></Provider> )

        const emailField = screen.getByRole('textbox', { name: 'Email' })
        fireEvent.change( emailField, { target: { name: 'email', value: email } } )

        const passwordField = screen.getByTestId('password')
        fireEvent.change( passwordField, { target: { name: 'password', value: password } } )

        const loginForm = screen.getByLabelText('submit-form')
        fireEvent.submit( loginForm )

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({ email, password })





    })
})