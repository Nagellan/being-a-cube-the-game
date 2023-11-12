import { nanoid } from 'nanoid';

import { Cube } from './Cube';
import { FOV } from './FOV';
import { Fear } from './Fear';
import { Map } from './Map';
import { GAME_EVENT } from '../constants/game';
import type { Position } from '../types/positioned';
import type {
	GameEventListener,
	GameEventListenerPayload,
} from '../types/game';
import type { Noop } from '../types/helpers';

export class Game {
	/**
	 * Время существования мира (в часах)
	 */
	private lifetime: number;

	/**
	 * Время начала игры (от 0 до 23)
	 */
	private startTime: number;

	/**
	 * Реакция на игровое событие
	 */
	private eventListeners: Record<string, GameEventListener>;

	/**
	 * Карта мира
	 */
	readonly map: Map;
	/**
	 * Кубик — гг, управляемый персонаж
	 */
	readonly cube: Cube;
	/**
	 * Страхи — враги кубика
	 */
	readonly fears: Fear[];

	/**
	 * Таймер времени существования мира
	 */
	private lifetimeTimer: Timer | null;

	constructor() {
		this.lifetime = 0;
		this.startTime = 12;

		this.map = new Map();

		const initialPosition: Position = [0, 0];
		const fov = new FOV(initialPosition, 2, this.map);

		this.cube = new Cube(initialPosition, fov);
		this.fears = [];

		this.lifetimeTimer = null;
		this.eventListeners = {};
	}

	/**
	 * Время от 0 до 23, где 0 — полночь, а 12 — полдень
	 */
	get time(): number {
		return (this.startTime + this.lifetime) % 24;
	}

	/**
	 * Время суток — утро (с 6 до 12)
	 */
	get isMorning(): boolean {
		return this.time >= 6 && this.time < 12;
	}

	/**
	 * Время суток — день (с 12 до 18)
	 */
	get isAfternoon(): boolean {
		return this.time >= 12 && this.time < 18;
	}

	/**
	 * Время суток — вечер (с 18 до полуночи)
	 */
	get isEvening(): boolean {
		return this.time >= 18;
	}

	/**
	 * Время суток — ночь (с полуночи до 6)
	 */
	get isNight(): boolean {
		return this.time < 6;
	}

	/**
	 * Среагировать на нажатие пользователем клавиш
	 */
	protected onKeyDown = (event: KeyboardEvent): void => {
		try {
			switch (event.code) {
				// Ход вверх
				case 'KeyW':
					this.cube.moveUp();
					this.callEventListeners({
						event: GAME_EVENT.MOVE,
						target: this.cube,
					});
					break;

				// Ход вниз
				case 'KeyS':
					this.cube.moveDown();
					this.callEventListeners({
						event: GAME_EVENT.MOVE,
						target: this.cube,
					});
					break;

				// Ход вправо
				case 'KeyD':
					this.cube.moveRight();
					this.callEventListeners({
						event: GAME_EVENT.MOVE,
						target: this.cube,
					});
					break;

				// Ход влево
				case 'KeyA':
					this.cube.moveLeft();
					this.callEventListeners({
						event: GAME_EVENT.MOVE,
						target: this.cube,
					});
					break;

				// Взаимодействие с предметом на клетке
				case 'KeyF':
					this.cube.interact();
					this.callEventListeners({
						event: GAME_EVENT.ACTION,
						target: this.cube,
					});
					break;

				default:
					// игнорируем нажатия на любые другие клавиши
					break;
			}
		} catch (error) {
			console.error(error);
		}
	};

	/**
	 * Подписаться на игровые события
	 * Возвращает функцию отписки слушателя от игровых событий
	 */
	subscribeToEvents(listener: GameEventListener): Noop {
		const id = nanoid();

		this.eventListeners[id] = listener;

		return () => {
			delete this.eventListeners[id];
		};
	}

	/**
	 * Вызвать всех подписчиков
	 */
	private callEventListeners(payload: GameEventListenerPayload): void {
		Object.values(this.eventListeners).forEach((listener) => {
			listener(payload);
		});
	}

	/**
	 * Отписать всех подписчиков
	 */
	private removeEventListeners(): void {
		this.eventListeners = {};
	}

	/**
	 * Запустить мир
	 */
	start(): void {
		// Запуск отсчёта времени мира
		this.lifetimeTimer = setInterval(
			() => {
				this.lifetime += 1;

				this.callEventListeners({
					event: GAME_EVENT.CLOCK,
					target: this,
				});
			},
			5 * 60 * 1000,
		);

		// Запуск отслеживания действий игрока
		window.addEventListener('keydown', this.onKeyDown);
	}

	/**
	 * Остановить мир
	 */
	stop(): void {
		// Остановка отсчёта времени мира
		if (this.lifetimeTimer) {
			clearInterval(this.lifetimeTimer);
			this.lifetimeTimer = null;
		}

		// Остановка отслеживания действий игрока
		window.removeEventListener('keydown', this.onKeyDown);
	}
}
