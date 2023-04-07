import { Pokemon, PokemonDetails } from "../types/pokemon";

export const fetchAllPokemon = async (
  url: string
): Promise<{ results: Pokemon[] }> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("ポケモン情報の取得に失敗しました。");
  }
};

export const fetchPokemonDetail = async (
  url: string
): Promise<PokemonDetails> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("ポケモン情報の取得に失敗しました。");
  }
};
