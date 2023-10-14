import { Cell } from "./Cell";
import { MAP } from "../constants/map";
import { getXIndex, getYIndex } from "../utils/geometry";
import type { MapData } from "../types/map";
import type { Coordinate } from "../types/positioned";

export class Map {
  /**
   * Размер карты (значение ширины и высоты) — нечетный
   */
  readonly size: number;
  /**
   * Данные карты в виде двухмерного массива клеток
   */
  readonly data: MapData;

  constructor() {
    this.data = MAP;
    this.size = MAP.length;
  }

  /**
   * Получить клетку по её координатам
   */
  getCellByCoordinates(x: Coordinate, y: Coordinate): Cell {
    return this.data[getYIndex(y, this.size)][getXIndex(x, this.size)];
  }

  /**
   * Получить клетку по её id
   */
  getCellById(id: string): Cell {
    const [x, y] = Cell.parseId(id);

    return this.getCellByCoordinates(x, y);
  }
}
