import { useGame } from "../hooks/useGame";
import { Cell } from "./Cell";

export const Map = () => {
  const { map } = useGame();

  return (
    <div className="map">
      {map.data.map((row) =>
        row.map((cell) => {
          return <Cell key={cell.id} id={cell.id} />;
        })
      )}
    </div>
  );
};
