import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => inputRef.current.select();


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input type="text" ref={ inputRef }
        className="form-control" 
        placeholder='Insert your name' />

        <button className='btn btn-primary mt-2' onClick={ onClick } >Set Focus</button>
    </>
  )
}
