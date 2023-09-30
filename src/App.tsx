import { FixedSizeGrid } from "react-window";
import PokemonListItem from "./Components/PokemonListItem";
import { useDevice } from "./hooks";
import Loading from "./Components/Loading";

export const App = () => {
  const { width, height, columnCount, rowCount, columnWidth } = useDevice();
  return (
    <FixedSizeGrid
      columnCount={columnCount}
      columnWidth={columnWidth}
      height={height}
      rowCount={rowCount}
      rowHeight={120}
      width={width}
      useIsScrolling
    >
      {({ columnIndex, rowIndex, style, isScrolling }) => (
        <div style={style}>
          {isScrolling ? (
            <Loading />
          ) : (
            <PokemonListItem columnIndex={columnIndex} rowIndex={rowIndex} />
          )}
        </div>
      )}
    </FixedSizeGrid>
  );
};

export default App;
