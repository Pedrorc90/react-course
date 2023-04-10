import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: 'dn4kvm814',
    api_key: '321468169779854',
    api_secret: 'S2aCHe1zJW902bl4lDmopeG0mA0',
    secure: true
})

describe('file Upload tests', () => {

    test('Should upload the file properly to cloudinary', async() => {

        const imageUrl = 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png';
        const resp = await fetch( imageUrl )
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')
        const url = await fileUpload( file );
        expect( typeof url ).toBe('string')

        const segments = url.split('/');
        const imageId = segments[ segments.length -1 ].replace('.png', '');

        await cloudinary.api.delete_resources( [ 'journal/' + imageId ] )

    })

    test('Should upload the file should return null if is wrong', async() => {

        const file = new File([], 'foto.jpg')
        const url = await fileUpload( file );
        expect( url ).toBe( null )

    })
})