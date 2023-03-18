import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"



describe('GifExpertApp component', () => {


    test('Should show always the title in the h1', () => {
        render( <GifExpertApp /> )
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe('GifExpertApp')
    })

    test('Should add a new category after submit form', () => {
        // render( <GifExpertApp /> )
        // const onAddCategory = jest.fn();
        
        // const input = screen.getByRole('textbox');
        // const form = screen.getByRole('form');

        // fireEvent.input( input, { target: { value: "Hello" } } )
        
        // fireEvent.submit( form )
        // screen.debug()

        // expect( onAddCategory ).toHaveBeenCalled()


        
    })


})

