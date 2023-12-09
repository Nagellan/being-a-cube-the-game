import { useContext, useCallback } from 'react';

import { GameContext } from '../contexts/game';

/**
 * Точка взаимодействия интерфейсов и игровым движком.
 */
export const useGame = () => {
	const game = useContext(GameContext);

	if (game === null) {
		throw new Error(
			'Хук useGame должен быть вызван в пределах компонента GameProvider',
		);
	}

	const getCell = useCallback(
		(id: string) => game.map.getCellById(id),
		[game.map],
	);

	return {
		game,
		map: game.map,
		cube: game.cube,
		fears: game.fears,
		getCell,
	};
};
