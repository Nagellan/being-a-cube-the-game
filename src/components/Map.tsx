import { useState, useEffect } from "react";

import { useGame } from "../hooks/useGame";
import { Cell } from "./Cell";
import type { Position } from "../types/positioned";

const getStyle = ([x, y]: Position, size: number) => ({
  left: `calc(${x} * -1 * (var(--cell-size) + var(--map-gap)))`,
  top: `calc(${y} * (var(--cell-size) + var(--map-gap)))`,
  gridTemplateColumns: `repeat(${size}, var(--cell-size))`,
  gridTemplateRows: `repeat(${size}, var(--cell-size))`,
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
    <div className="map" style={getStyle(position, map.size)}>
      {map.data.map((row) =>
        row.map((cell) => {
          return <Cell key={cell.id} id={cell.id} />;
        })
      )}
    </div>
  );
};
