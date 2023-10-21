import { CELL_TYPE } from '../../constants/cell';
import { Cell } from '../Cell';
import type { WaterCellItem } from '../../types/cell';

/**
 * Клетка воды
 */
export class WaterCell extends Cell {
	readonly type = CELL_TYPE.WATER;
	readonly permeable = false;

	declare item: WaterCellItem | null;

	setItem(item: WaterCellItem): this {
		return super.setItem(item);
	}
}
