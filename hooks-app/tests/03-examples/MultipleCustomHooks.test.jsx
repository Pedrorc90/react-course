import { render, screen, fireEvent, renderHook } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter } from "../../src/hooks"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Test in <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue( { counter: 1, increment: mockIncrement } )

    beforeEach( () => {
        jest.clearAllMocks();
    } )

    test('Should show the default component', () => {

        useFetch.mockReturnValue( { state : { data: null, isLoading: true, hasError: false } } )

        render(<MultipleCustomHooks />)
        
        const nextButton = screen.getByRole('button', { name: 'Next character' })

        expect( screen.getByText('Loading...') )
        expect( screen.getByText('Ricky & Morti') )
        expect( nextButton.disabled ).toBeTruthy();
    })

    test('Should show a character name', () => {


        useFetch.mockReturnValue( { state : { data: { image: null, name: 'Pedro', status: 'Alive' }, isLoading: false, hasError: false } } )

        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole('button', { name: 'Next character' })

        expect( screen.getByText('Pedro') ).toBeTruthy();
        expect( nextButton.disabled ).toBeFalsy();
        
        
    })


    test('Should call increment function', () => {

        useFetch.mockReturnValue( { state : { data: { image: null, name: 'Pedro', status: 'Alive' }, isLoading: false, hasError: false } } )


        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole('button', { name: 'Next character' })

        fireEvent.click( nextButton );


        expect( mockIncrement ).toHaveBeenCalled()
        
        
    })
})