import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { Character } from '../03-examples/Character';
import { LoadingCharacter } from '../03-examples/LoadingCharacter';


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { state } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`)  
    const { data, isLoading, hasError } = state;
    const { image, name, status } = !!data && data;


  return (
    <>
        <h1>Ricky & Morti</h1>
        <hr />

        { isLoading ? <LoadingCharacter /> : <Character image={ image } name={ name } status={ status } /> }

        <button className='btn btn-primary' disabled={ isLoading } onClick={ increment }>Next character</button>
    </>
  )
}
