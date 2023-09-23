import type {
  CELL_TYPE,
  CELL_PERMEABILITY,
  CELL_INTERACTIVITY,
} from "../constants/cell";
import type { Values } from "./helpers";

/**
 * Тип клетки
 */
export type CellType = Values<typeof CELL_TYPE>;

/**
 * Проходимость клетки
 */
export type CellPermeability = Values<typeof CELL_PERMEABILITY>;

/**
 * Возможность взаимодействия с клеткой
 */
export type CellInteractivity = Values<typeof CELL_INTERACTIVITY>;

/**
 * Позиция клетки на карте (x, y)
 */
export type CellPosition = [number, number];
