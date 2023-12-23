import { useEffect } from 'react';

import { useGame } from './useGame';
import type { GameEventListener } from '../types/game';

export const useEvent = (listener: GameEventListener) => {
	const { game } = useGame();

	useEffect(() => {
		const unsubscribe = game.subscribeToEvents(listener);

		return () => {
			unsubscribe();
		};
	}, [game, listener]);
};
