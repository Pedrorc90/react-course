import PropTypes from 'prop-types';


export const FirstApp = ( { title, subtitle, name } ) => {

    //console.log( props )

    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
        
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    //title: 'There is no title',
    subtitle: 'There is no subtitle',
    name: 'Pedro Ramón'
}