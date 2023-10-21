import React, { useEffect } from 'react';
import type { ReactNode } from 'react';

import { Game } from '../entities/Game';
import { GameContext } from '../contexts/game';

type Props = {
	children: ReactNode;
};

const game = new Game();

export const GameProvider = ({ children }: Props) => {
	useEffect(() => {
		game.start();
	}, []);

	return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};
