import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

const CharacterManager = () => {

    const [characterList, setCharacterList] = useState([]);
    const [actualIndex, setActualIndex] = useState(0);

    useEffect(() => {
        getCharacterList();
    }, [])

    const getCharacterList = async () => {
        try {

            fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=30')
                .then((response) => response.json())
                .then((data) => setCharacterList(data));

        } catch (error) {
            console.log(error);
        }
    }

    const nextCharacter = () => {
        actualIndex!=characterList.length-1 ? setActualIndex(actualIndex + 1):setActualIndex(0);
    }

    const prevCharacter = () => {
        actualIndex!=0 ? setActualIndex(actualIndex - 1):setActualIndex(characterList.length-1);
    }

    return (
        <div className="text-center">

            <h1>The Simpsons</h1>

            <div className="text-center row">
                <div className="col-4">
                    <button className=' btn btn-danger' onClick={prevCharacter}>Anterior</button>
                </div>
                <div className="col-4">
                    <p >{(actualIndex+1) + "/" + characterList.length}</p>
                </div>
                <div className="col-4">
                    <button className=' btn btn-danger' onClick={nextCharacter}>Siguiente</button>
                </div>
            </div>

            {characterList.length != 0 ?
                <CharacterCard
                    character={characterList[actualIndex]}
                /> : null}
        </div>
    )
}

/*commit #4 */
export default CharacterManager