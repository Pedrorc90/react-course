const apiKey = '5iIHiGQl0vjjCmgWMnoDVybsW23XAdqU';


const httpRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

httpRequest
.then( ( resp ) => resp.json())
.then( ({ data }) => { 
    const { url } = data.images.original;
    const img = document.createElement('img')

    img.src = url;

    document.body.append( img )
})
.catch( console.warn )

