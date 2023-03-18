

// const getImagePromise = () => new Promise( ( resolve, reject ) => resolve( 'https://dfaslfj.com' ) )
// getImagePromise().then(console.log)



const getImagePromise = async () => {

    try{
        const apiKey = '5iIHiGQl0vjjCmgWMnoDVybsW23XAdqU';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img )
    } catch(err) {
        // Error management
    }
    
    

}


getImagePromise()