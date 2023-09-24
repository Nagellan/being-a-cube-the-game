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
   * Позиция сущности на карте: X и Y координаты
   */
  get position(): Position {
    return [this.x, this.y];
  }

  /**
   * Установить позицию сущности на карте: X и Y координаты
   */
  setPosition(x: Coordinate, y: Coordinate): void {
    this.x = x;
    this.y = y;
  }
}
