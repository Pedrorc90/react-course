import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('CounterApp testing', () => {

    const value = 100;

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ value }/>)
        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar el valir inicial de 100', () => {
        render( <CounterApp value={ value }/> )
        expect( screen.getByText(100)).toBeTruthy();
    })

    test('Debe de incrementar con el botón +1', () => {
        render( <CounterApp value={ value }/> )
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('101') ).toBeTruthy()
    })

    test('Debe de decrementar con el botón -1', () => {
        render( <CounterApp value={ value }/> )
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('99') ).toBeTruthy()
    })

    test('Debe de reset value con el botón Reset', () => {
        render( <CounterApp value={ value }/> )
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) )
        expect( screen.getByText(100) ).toBeTruthy()
    })
})