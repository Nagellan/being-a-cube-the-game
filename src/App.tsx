import { Map } from "./components/Map";
import { GameProvider } from "./providers/game";

export const App = () => {
  return (
    <GameProvider>
      <div className="game">
        <Map />
      </div>
    </GameProvider>
  );
};
