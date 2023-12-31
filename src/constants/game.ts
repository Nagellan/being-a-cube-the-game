/**
 * Игровое событие
 */
export const GAME_EVENT = {
	/**
	 * Старт игры
	 */
	START: 'START',
	/**
	 * Остановка игры
	 */
	STOP: 'STOP',
	/**
	 * Изменение игрового времени
	 */
	CLOCK: 'CLOCK',
	/**
	 * Движение существа
	 */
	MOVE: 'MOVE',
	/**
	 * Действие существа
	 */
	ACTION: 'ACTION',
} as const;
