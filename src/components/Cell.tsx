import { useMemo } from "react";

import { useGame } from "../hooks/useGame";
import type { CellType } from "../types/cell";

const getClassName = (type: CellType, visible: boolean) => {
  let className = "__cell";

  if (visible) {
    className += ` __cell--${type.toLowerCase()}`;
  } else {
    className += " __cell--blank";
  }

  return className;
};

type Props = {
  id: string;
};

export const Cell = ({ id }: Props) => {
  const { getCell, cube } = useGame();

  const cell = useMemo(() => getCell(id), [id]);

  return (
    <div
      className={getClassName(cell.type, cube.fov.includes(...cell.position))}
    ></div>
  );
};
