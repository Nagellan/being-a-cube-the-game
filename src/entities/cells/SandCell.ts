import { CELL_TYPE } from "../../constants/cell";
import { Cell } from "../Cell";

/**
 * Клетка песка
 */
export class SandCell extends Cell {
  readonly type = CELL_TYPE.SAND;
  readonly permeable = true;
}
