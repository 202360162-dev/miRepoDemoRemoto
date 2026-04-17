import PokemonCard from './pokemoncard';
import RandomPokemonCard from './RandomPokemonCard';

function PokemonGallery() {
  const pokemonList = [
    'charizard',
    'pikachu',
    'blastoise',
    'venusaur',
    'dragonite',
    'gyarados',
    'arcanine',
    'lapras',
    'articuno',
    'zapdos',
    'moltres',
    'lugia'
  ];

  return (
    <div className="pokemon-gallery">
      <RandomPokemonCard />
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon} pokemonName={pokemon} />
      ))}
    </div>
  );
}

export default PokemonGallery;
