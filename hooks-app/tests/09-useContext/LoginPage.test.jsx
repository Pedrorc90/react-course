const { render, screen, fireEvent } = require("@testing-library/react");
const { useContext } = require("react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { LoginPage } = require("../../src/09-useContext/LoginPage");

describe('Test in <LoginPage />', () => {

    const user = {
        id: 1,
        name: 'Pedro',
        email: 'pedro@google.com'
    }


    test('Should show the component without the user', () => {

        render(
            <UserContext.Provider value={ { user: null } }>
                <LoginPage /> 
            </UserContext.Provider> 
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null')

        
    })

    test('Should call setUser when the user clicks in the button', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <LoginPage /> 
            </UserContext.Provider> 
        )

        const buttonTag = screen.getByRole('button');
        fireEvent.click( buttonTag )

        expect( setUserMock ).toHaveBeenCalledWith( { "email": "juan@google.com", "id": 3, "name": "Juan" } )

        
    })


})