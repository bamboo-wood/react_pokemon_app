export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetails = {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  width: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
};
