/**
 * Тип клетки
 */
export const CELL_TYPE = {
  /**
   * Трава
   */
  GRASS: "GRASS",
  /**
   * Трава с камушком
   */
  GRASS_WITH_STONE: "GRASS_WITH_STONE",
  /**
   * Трава с палочкой
   */
  GRASS_WITH_STICK: "GRASS_WITH_STICK",
  /**
   * Песок
   */
  SAND: "SAND",
  /**
   * Вода
   */
  WATER: "WATER",
  /**
   * Вода с рыбкой
   */
  WATER_WITH_FISH: "WATER_WITH_FISH",
} as const;

/**
 * Проходимость клетки
 */
export const CELL_PERMEABILITY = {
  /**
   * Проходимая
   */
  PERMEABLE: "PERMEABLE",
  /**
   * Непроходимая
   */
  IMPERMEABLE: "IMPERMEABLE",
} as const;

/**
 * Возможность взаимодействия с клеткой
 */
export const CELL_INTERACTIVITY = {
  /**
   * Можно взаимодействовать
   */
  INTERACTIVE: "INTERACTIVE",
  /**
   * Нельзя взаимодействовать
   */
  NON_INTERACTIVE: "NON_INTERACTIVE",
} as const;
