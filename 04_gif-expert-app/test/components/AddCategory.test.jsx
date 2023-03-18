import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory component', () => {


    test('Should change the value inside input', () => {
        render(<AddCategory onNewCategory={ () => {} } />)
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe( 'Saitama' )
    })

    test('Should call to onNewCategory if the input has some value', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect ( onNewCategory ).toHaveBeenCalled();
        expect ( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect ( onNewCategory ).toHaveBeenCalledWith( inputValue );

    })

    test('Should NOT call to onNewCategory if the input is empty', () => {

       
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />)

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect ( onNewCategory ).not.toHaveBeenCalled();

    })


})