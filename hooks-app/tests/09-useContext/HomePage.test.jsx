const { render, screen, fireEvent } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { HomePage } = require("../../src/09-useContext/HomePage");



describe('Test in <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Pedro'
    }


    test('Should show the component without the user', () => {

        render(
            <UserContext.Provider value={ { user: null } }>
                <HomePage /> 
            </UserContext.Provider> 
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null')

        
    })

    test('Should show the component with the user', () => {

        render(
            <UserContext.Provider value={ { user } }>
                <HomePage /> 
            </UserContext.Provider> 
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name )

        
    })


})