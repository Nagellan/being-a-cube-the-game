import type { Coordinate, Position } from "../types/positioned";

/**
 * Сущность, имеющая свою позицию на карте
 */
export abstract class Positioned {
  /**
   * Координата X на карта (горизонтальная ось абсцисс)
   */
  protected x: Coordinate;
  /**
   * Координата Y на карта (вертикальная ось ординат)
   */
  protected y: Coordinate;

  constructor(x: Coordinate, y: Coordinate) {
    this.x = x;
    this.y = y;
  }

  /**
   * Получить позицию сущности на карте: x и y координаты
   */
  get position(): Position {
    return [this.x, this.y];
  }
}
