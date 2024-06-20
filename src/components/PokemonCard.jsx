import React from "react";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-56 h-56 aspect-square"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{pokemon.name}</div>
        <p className="text-gray-700 text-base">
          Height: {pokemon.height} | Weight: {pokemon.weight}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
