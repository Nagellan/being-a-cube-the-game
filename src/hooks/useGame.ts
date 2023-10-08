import { useContext } from "react";

import { GameContext } from "../contexts/game";

export const useGame = () => {
  const game = useContext(GameContext);

  if (game === null) {
    throw new Error("Hook useGame has been used outside of GameProvider");
  }

  return {
    game,
    map: game.map,
    cube: game.cube,
    fears: game.fears,
    getCell: (id: string) => game.map.getCellById(id),
  };
};
