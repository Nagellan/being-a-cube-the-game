import { useMemo } from "react";

import { useGame } from "../hooks/useGame";

type Props = {
  id: string;
};

export const Cell = ({ id }: Props) => {
  const { getCell } = useGame();

  const cell = useMemo(() => getCell(id), [id]);

  return <div className="cell"></div>;
};
