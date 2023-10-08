import { useState, useEffect } from "react";

import { useGame } from "../hooks/useGame";
import { Cell } from "./Cell";
import type { Position } from "../types/positioned";

const getStyle = ([x, y]: Position) => ({
  left: `${x * -44}px`,
  top: `${y * 44}px`,
});

export const Map = () => {
  const { map, cube } = useGame();

  const [position, setPosition] = useState(cube.position);

  useEffect(() => {
    cube.listenToMove((x, y) => {
      setPosition([x, y]);
    });

    return () => {
      cube.stopListenToMove();
    };
  }, []);

  return (
    <div className="map" style={getStyle(position)}>
      {map.data.map((row) =>
        row.map((cell) => {
          return <Cell key={cell.id} id={cell.id} />;
        })
      )}
    </div>
  );
};
