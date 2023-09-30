const API_PATH = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemon = async (id: number) => {
  const response = await fetch(`${API_PATH}${id}`);
  const object = await response.json();
  return {
    name: object.name.charAt(0).toUpperCase() + object.name.slice(1),
    id: object.id,
    imgSrc: object.sprites.front_default,
  };
};
