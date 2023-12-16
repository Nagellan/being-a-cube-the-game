import { Creature } from './Creature';
import { Inventory } from './Inventory';
import type { FOV } from './FOV';
import type { Coordinate, Position } from '../types/positioned';

/**
 * Кубик (главный герой игры, управляемый персонаж)
 */
export class Cube extends Creature {
	/**
	 * Максимальное здоровье
	 */
	readonly maxHealth: number;
	/**
	 * Текущее здоровье
	 */
	protected health: number;

	/**
	 * Поле зрения
	 */
	readonly fov: FOV;

	/**
	 * Инвентарь
	 */
	readonly inventory: Inventory;

	constructor([x, y]: Position, fov: FOV) {
		super(x, y);

		this.maxHealth = 100;
		this.health = this.maxHealth;
		this.inventory = new Inventory();
		this.fov = fov;
	}

	/**
	 * Установить позицию сущности на карте: X и Y координаты
	 */
	setPosition(x: number, y: number): void {
		// Координаты кубика всегда должны быть центром его поля зрения
		this.fov.setPosition(x, y);

		super.setPosition(x, y);
	}

	/**
	 * Переместить кубик
	 */
	move(x: Coordinate, y: Coordinate) {
		const cell = this.fov.getCell(x, y);

		if (!cell.permeable) {
			throw new Error(
				`Нельзя ходить на непроходимые клетки: (${x}, ${y})`,
			);
		}

		super.move(x, y);
	}

	/**
	 * Взаимодействовать с клеткой, на которой кубик стоит
	 */
	interact() {
		const cell = this.fov.getCell(...this.position);

		if (!cell.interactive) {
			throw new Error(
				`Нельзя взаимодействовать с клеткой: (${cell.x}, ${cell.y})`,
			);
		}

		const item = cell.interact();

		this.inventory.add(item, 1);
	}
}
