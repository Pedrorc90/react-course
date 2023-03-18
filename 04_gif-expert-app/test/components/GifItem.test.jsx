import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('GifItem component', () => {

    const title = 'Dragon Ball';
    const url = 'https://';

    test('Snapshot should be correct', () => {
        const { container } = render( <GifItem title={ title } url={ url }/> )
        expect( container ).toMatchSnapshot()
    })

    test('Should show the image with the url and the alt value', () => {
        render( <GifItem title={ title } url={ url }/> )
        expect( screen.getByRole('img').src).toBe( url )
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Should show the title in the component', () => {
        render( <GifItem title={ title } url={ url }/> )
        expect( screen.findByText( title ) ).toBeTruthy()
    })
})