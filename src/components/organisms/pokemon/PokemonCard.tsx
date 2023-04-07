import { Pokemon, PokemonDetails } from "../../../types/pokemon";

type PokemonCardProps = {
  pokemon: PokemonDetails;
};

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;
  return (
    <div className="card">
      <div className="cardImage">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <h5>Types</h5>
        {pokemon.types.map((type, index) => {
          return (
            <div key={index}>
              <span>{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <h5>Weight: {pokemon.weight}</h5>
        </div>
        <div className="cardData">
          <h5>Height: {pokemon.height}</h5>
        </div>
        <div className="cardData">
          <h5>Abilities: </h5>
          {pokemon.abilities.map((ability, index) => {
            return (
              <div key={index}>
                <span>{ability.ability.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
