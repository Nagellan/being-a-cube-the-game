import type { CELL_TYPE } from "../constants/cell";
import type { ITEM } from "../constants/item";
import type { Values } from "./helpers";

/**
 * Тип клетки
 */
export type CellType = Values<typeof CELL_TYPE>;

/**
 * Предмет, который может находиться на траве
 */
export type GrassCellItem = Values<Pick<typeof ITEM, "STICK" | "STONE">>;

/**
 * Предмет, который может находиться на песке
 */
export type SandCellItem = Values<Pick<typeof ITEM, "STICK" | "STONE">>;

/**
 * Предмет, который может находиться в воде
 */
export type WaterCellItem = Values<Pick<typeof ITEM, "FISH">>;
