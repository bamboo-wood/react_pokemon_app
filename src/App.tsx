import { useEffect, useState } from "react";
import "./App.css";
import {
  fetchAllPokemon as fetchAllPokemons,
  fetchPokemonDetail,
} from "./utils/pokemon";
import { Pokemon, PokemonDetails } from "./types/pokemon";
import { PokemonCard } from "./components/organisms/pokemon/PokemonCard";
import { Navbar } from "./components/organisms/Navbar";

const initialURL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<PokemonDetails[]>([]);
  const [prevUrl, setPrevUrl] = useState<string | null>("");
  const [nextUrl, setNextUrl] = useState<string | null>("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    const pokemons = await fetchAllPokemons(initialURL);
    await loadPokemon(pokemons.results);
    setPrevUrl(pokemons.previous);
    setNextUrl(pokemons.next);
    setLoading(false);
  };

  const loadPokemon = async (pokemons: Pokemon[]) => {
    const _pokemonData = await Promise.all(
      pokemons.map(async (pokemon) => {
        return fetchPokemonDetail(pokemon.url);
      })
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async () => {
    setLoading(true);
    const pokemons = await fetchAllPokemons(prevUrl!);
    await loadPokemon(pokemons.results);

    setPrevUrl(pokemons.previous);
    setNextUrl(pokemons.next);
    setLoading(false);
  };

  const handleNextPage = async () => {
    setLoading(true);
    const pokemons = await fetchAllPokemons(nextUrl!);
    await loadPokemon(pokemons.results);

    setPrevUrl(pokemons.previous);
    setNextUrl(pokemons.next);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, index) => {
                return <PokemonCard key={index} pokemon={pokemon} />;
              })}
            </div>
            <div className="pagination">
              {prevUrl && <button onClick={handlePrevPage}>prev</button>}
              {nextUrl && <button onClick={handleNextPage}>next</button>}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
