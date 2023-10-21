import { Positioned } from './Positioned';
import { getIsPointInsideCircle } from '../utils/geometry';
import type { Coordinate, Position } from '../types/positioned';
import type { Cell } from './Cell';
import type { Map } from './Map';

/**
 * Поле зрения (округлое)
 */
export class FOV extends Positioned {
	/**
	 * Дальность поля зрения (радиус окружности)
	 */
	range: number;

	/**
	 * Карта мира
	 */
	private map: Map;

	constructor([x, y]: Position, range: number, map: Map) {
		super(x, y);

		this.range = range;
		this.map = map;
	}

	/**
	 * Получить клетку внутри ФОВа по координатам, если она там имеется
	 */
	getCell(x: Coordinate, y: Coordinate): Cell {
		if (!this.includes(x, y)) {
			throw new Error(
				`Нельзя получить клетку ФОВа, которая в нём не находится: (${x}, ${y})`,
			);
		}

		return this.map.getCellByCoordinates(x, y);
	}

	/**
	 * Установить дальность поля зрения (радиус окружности)
	 */
	setRange(range: number) {
		this.range = range;
	}

	/**
	 * Узнать, находится ли переданная точка в поле зрения (включительно)
	 */
	includes(x: Coordinate, y: Coordinate) {
		return getIsPointInsideCircle(x, y, this.x, this.y, this.range);
	}
}
