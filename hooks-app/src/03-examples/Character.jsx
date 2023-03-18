import React, { useLayoutEffect, useRef, useState } from 'react'

export const Character = ({ image, name, status }) => {

  const pRef = useRef();
  const [ boxSize, setBoxSize ] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height })
  }, [ name ])

  return (
    <>
      <blockquote className='blockquote text-center' style={{ display: 'flex' }}>
          <img className='img-thumbnai mb-2' src={ image } ></img>
          <p ref={ pRef } className="mb-2">{ name }</p>
          <footer className='blockquote-footer'>{ status }</footer>
      </blockquote>
      <code>{ JSON.stringify( boxSize ) }</code>
    </>
    
  )
}
