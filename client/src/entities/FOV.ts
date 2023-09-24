import { Positioned } from "./Positioned";
import { getIsPointInsideCircle } from "../utils/geometry";
import type { Coordinate } from "../types/positioned";

/**
 * Поле зрения (округлое)
 */
export class FOV extends Positioned {
  /**
   * Дальность поля зрения (радиус окружности)
   */
  range: number;

  constructor(x: Coordinate, y: Coordinate, range: number) {
    super(x, y);

    this.range = range;
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
