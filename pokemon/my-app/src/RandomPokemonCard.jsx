import { useState } from 'react';
import PokemonCard from './pokemoncard';

function RandomPokemonCard() {
  const [randomPokemon, setRandomPokemon] = useState(null);

  const getRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    setRandomPokemon(randomId);
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    getRandomPokemon();
  };

  return (
    <div className="random-pokemon-card-container">
      <div className="random-pokemon-card" onClick={getRandomPokemon}>
        {randomPokemon ? (
          <PokemonCard pokemonName={randomPokemon} />
        ) : (
          <div className="pokemon-card question-mark">
            <span className="question-symbol">?</span>
            <p>¡Descubre un Pokémon!</p>
          </div>
        )}
      </div>
      {randomPokemon && (
        <button className="random-button" onClick={handleNextClick}>
          Siguiente
        </button>
      )}
    </div>
  );
}

export default RandomPokemonCard;
