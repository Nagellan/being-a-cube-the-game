import { GAME_EVENT } from '../constants/game';
import type { Creature } from '../entities/Creature';
import type { Game } from '../entities/Game';
import type { Values } from './helpers';

export type GameEvent = Values<typeof GAME_EVENT>;

type GameStartEventListenerPayload = {
	event: typeof GAME_EVENT.START;
	target: Game;
};

type GameStopEventListenerPayload = {
	event: typeof GAME_EVENT.STOP;
	target: Game;
};

type GameClockEventListenerPayload = {
	event: typeof GAME_EVENT.CLOCK;
	target: Game;
};

type GameMoveEventListenerPayload = {
	event: typeof GAME_EVENT.MOVE;
	target: Creature;
};

type GameActionEventListenerPayload = {
	event: typeof GAME_EVENT.ACTION;
	target: Creature;
};

export type GameEventListenerPayload =
	| GameStartEventListenerPayload
	| GameStopEventListenerPayload
	| GameClockEventListenerPayload
	| GameMoveEventListenerPayload
	| GameActionEventListenerPayload;

export type GameEventListener = (payload: GameEventListenerPayload) => void;
