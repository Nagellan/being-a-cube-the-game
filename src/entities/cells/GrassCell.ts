import { CELL_TYPE } from "../../constants/cell";
import { Cell } from "../Cell";
import type { GrassCellItem } from "../../types/cell";

/**
 * Клетка травы
 */
export class GrassCell extends Cell {
  readonly type = CELL_TYPE.GRASS;
  readonly permeable = true;

  protected declare item: GrassCellItem | null;

  setItem(item: GrassCellItem): this {
    return super.setItem(item);
  }
}
