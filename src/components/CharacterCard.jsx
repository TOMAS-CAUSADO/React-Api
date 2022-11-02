import React from 'react'

const CharacterCard = ({character}) => {
  return (
    <div className='text-center border'>
         <h2>{character.character}</h2>
         <img src={character.image} />
         <p>{character.quote}</p>
    </div>
  )
}

export default CharacterCard