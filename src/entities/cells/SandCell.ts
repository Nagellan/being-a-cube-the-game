import { CELL_TYPE } from "../../constants/cell";
import { Cell } from "../Cell";
import type { SandCellItem } from "../../types/cell";

/**
 * Клетка песка
 */
export class SandCell extends Cell {
  readonly type = CELL_TYPE.SAND;
  readonly permeable = true;

  declare item: SandCellItem | null;

  setItem(item: SandCellItem): this {
    return super.setItem(item);
  }
}
