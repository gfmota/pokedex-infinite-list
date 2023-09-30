import React, { Suspense } from "react";
import { usePokemon } from "../hooks";
import Loading from "./Loading";
const Pokemon = React.lazy(() => import("./Pokemon"));

// interface Props { url: string };

const PokemonListItem = ({ columnIndex, rowIndex }: any) => {
  const { pokemon, isLoading } = usePokemon(rowIndex, columnIndex);

  return isLoading ? (
    <Loading />
  ) : (
    <Suspense fallback={<Loading />}>
      <Pokemon {...(pokemon as any)} />
    </Suspense>
  );
};

export default PokemonListItem;
