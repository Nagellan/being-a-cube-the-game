import { useState, useEffect } from 'react';

import type { GameEvent } from '../types/game';
import type { Game } from '../entities/Game';
import { useGame } from './useGame';

type RerenderCondition =
	| boolean
	| GameEvent[]
	| ((event: GameEvent, game: Game) => boolean | GameEvent[]);

const getIsRerenderRestricted = (condition: RerenderCondition): boolean => {
	if (typeof condition === 'boolean') {
		return !condition;
	}

	if (Array.isArray(condition)) {
		return condition.length === 0;
	}

	return false;
};

const getShouldRerender = (
	game: Game,
	condition: RerenderCondition,
	event: GameEvent,
): boolean => {
	if (getIsRerenderRestricted(condition)) {
		return false;
	}

	const _condition =
		typeof condition === 'function' ? condition(event, game) : condition;

	if (typeof _condition === 'boolean') {
		return _condition;
	}

	if (Array.isArray(_condition)) {
		return _condition.includes(event);
	}

	return false;
};

/**
 * Производит ре-рендер компонента по месту вызова относительно переданного условия.
 */
export const useRerender = (condition: RerenderCondition = false): void => {
	const { game } = useGame();

	// Используется для ре-рендера компонента
	const [, setEventCount] = useState<number>(0);

	useEffect(() => {
		if (getIsRerenderRestricted(condition)) {
			return;
		}

		const unsubscribe = game.subscribeToEvents(({ event }) => {
			if (getShouldRerender(game, condition, event)) {
				setEventCount((count) => count + 1);
			}
		});

		return () => {
			unsubscribe();
		};
	}, [game, condition]);
};
