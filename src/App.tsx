import { useEffect, useState } from "react";
import "./App.css";
import { fetchAllPokemon, fetchPokemonDetail } from "./utils/pokemon";
import { Pokemon, PokemonDetails } from "./types/pokemon";
import { PokemonCard } from "./components/organisms/pokemon/PokemonCard";

const initialURL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState<PokemonDetails[]>([]);

  const loadPokemon = async (pokemons: Pokemon[]) => {
    const _pokemonData = await Promise.all(
      pokemons.map(async (pokemon) => {
        return fetchPokemonDetail(pokemon.url);
      })
    );
    setPokemonData(_pokemonData);
  };

  const fetchPokemons = async () => {
    const pokemons = await fetchAllPokemon(initialURL);
    await loadPokemon(pokemons.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="pokemonCardContainer">
          {pokemonData.map((pokemon, index) => {
            return <PokemonCard key={index} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
