import type {
  CELL_TYPE,
  GRASS_CELL_ITEM,
  WATER_CELL_ITEM,
} from "../constants/cell";
import type { Values } from "./helpers";

/**
 * Тип клетки
 */
export type CellType = Values<typeof CELL_TYPE>;

/**
 * Предмет, который может находиться на траве
 */
export type GrassCellItem = Values<typeof GRASS_CELL_ITEM>;

/**
 * Предмет, который может находиться в воде
 */
export type WaterCellItem = Values<typeof WATER_CELL_ITEM>;

/**
 * Предмет, который может находиться на клетке
 */
export type CellItem = GrassCellItem | WaterCellItem;
