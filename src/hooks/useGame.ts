import { useContext, useState, useEffect } from 'react';

import { GameContext } from '../contexts/game';
import type { GameEvent } from '../types/game';

/**
 * Точка взаимодействия интерфейсов и игровым движком.
 * Производит ре-рендер компонента по месту вызова на каждое игровое событие.
 */
export const useGame = () => {
	const game = useContext(GameContext);

	// Используется для ре-рендера компонента
	const [, setEvents] = useState<GameEvent[]>([]);

	useEffect(() => {
		if (!game) return;

		const unsubscribe = game.subscribeToEvents(({ event }) => {
			setEvents((prevEvents) => [...prevEvents, event]);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	if (game === null) {
		throw new Error('Hook useGame has been used outside of GameProvider');
	}

	return {
		game,
		map: game.map,
		cube: game.cube,
		fears: game.fears,
		getCell: (id: string) => game.map.getCellById(id),
	};
};
