import { createContext } from "react";

import type { Game } from "../entities/Game";

export const GameContext = createContext<Game | null>(null);
