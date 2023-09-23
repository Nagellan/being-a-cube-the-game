import type { Coordinate, Position } from "../types/mapEntry";

export interface IMapEntry {
  readonly x: Coordinate;
  readonly y: Coordinate;

  get position(): Position;
}

export abstract class MapEntry implements IMapEntry {
  // координаты
  public readonly x: Coordinate;
  public readonly y: Coordinate;

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
