import React from "react";
import PokemonList from "./components/PokemonList";

const App = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Pokémon Search</h1>
      </header>
      <main>
        <PokemonList />
      </main>
    </div>
  );
};

export default App;
