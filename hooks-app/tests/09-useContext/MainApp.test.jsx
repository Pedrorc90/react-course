const { render, screen, fireEvent } = require("@testing-library/react");
const { useContext } = require("react");
const { BrowserRouter, MemoryRouter } = require("react-router-dom");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { LoginPage } = require("../../src/09-useContext/LoginPage");
const { MainApp } = require("../../src/09-useContext/MainApp");

describe('Test in <MainApp />', () => {


    test('Should show the HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
            
        )

        expect( screen.getByText('HomePage') ).toBeTruthy();

        
    })

    test('Should show the LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
            
        )

        expect( screen.getByText('LoginPage') ).toBeTruthy();

        
    })

    test('Should show the AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
            
        )

        expect( screen.getByText('AboutPage') ).toBeTruthy();

        
    })

    

})