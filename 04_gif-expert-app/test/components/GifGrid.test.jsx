import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('GifGrid component', () => {

    const category = 'One Punch';

    test('Should show loading at the beginning', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category }/> )

        expect( screen.getByText( category ) )
        expect( screen.getByText( 'Loading...' ) )
    })

    test('Should show the images when are coming from useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://'
            },
            {
                id: 'ABC2',
                title: 'Goku',
                url: 'https://'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render( <GifGrid category={ category }/> )

        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 )
    })

   
})