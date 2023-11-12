import { GAME_EVENT } from '../constants/game';
import type { Creature } from '../entities/Creature';
import type { Game } from '../entities/Game';
import type { Values } from './helpers';

export type GameEvent = Values<typeof GAME_EVENT>;

type GameMoveEventListenerPayload = {
	event: typeof GAME_EVENT.MOVE;
	target: Creature;
};

type GameActionEventListenerPayload = {
	event: typeof GAME_EVENT.ACTION;
	target: Creature;
};

type GameClockEventListenerPayload = {
	event: typeof GAME_EVENT.CLOCK;
	target: Game;
};

export type GameEventListenerPayload =
	| GameMoveEventListenerPayload
	| GameActionEventListenerPayload
	| GameClockEventListenerPayload;

export type GameEventListener = (payload: GameEventListenerPayload) => void;
