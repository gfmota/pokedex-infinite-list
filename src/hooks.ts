import { useQuery } from "react-query";
import { getPokemon } from "./services";

const MIN_WIDTH = 160;
const POKEMON_COUNT = 1015;

export const useDevice = () => {
  let width = 0,
    height = 0,
    columnCount = 1,
    rowCount = 1,
    columnWidth = 0;
  try {
    width = window.innerWidth;
    height = window.innerHeight;
    columnCount = Math.floor(width / MIN_WIDTH) || 1;
    columnWidth = width / columnCount;
    rowCount = Math.ceil(POKEMON_COUNT / columnCount);
  } catch (e) {
    console.error(e);
  }

  return { width, height, columnCount, rowCount, columnWidth };
};

export const usePokemon = (row: number, col: number) => {
  const { columnCount } = useDevice();
  const index = row * columnCount + col + 1;
  const { data: pokemon, isLoading } = useQuery([index], () =>
    getPokemon(index),
  );
  return { pokemon, isLoading };
};
