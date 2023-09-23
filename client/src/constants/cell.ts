/**
 * Тип клетки
 */
export const CELL_TYPE = {
  /**
   * Трава
   */
  GRASS: "GRASS",
  /**
   * Песок
   */
  SAND: "SAND",
  /**
   * Вода
   */
  WATER: "WATER",
} as const;

/**
 * Предмет, который может находиться на траве
 */
export const GRASS_CELL_ITEM = {
  /**
   * Палка
   */
  STICK: "STICK",
  /**
   * Камень
   */
  STONE: "STONE",
} as const;

/**
 * Предмет, который может находиться в воде
 */
export const WATER_CELL_ITEM = {
  /**
   * Рыба
   */
  FISH: "FISH",
} as const;
