import { GrassCell } from "./cells/GrassCell";
import { getX, getY, getXIndex, getYIndex } from "../utils/geometry";
import type { Cell } from "./Cell";
import type { MapData } from "../types/map";
import type { Coordinate } from "../types/positioned";

const createFlatMap = (size: number): MapData =>
  Array.from({ length: size }, (_, y) =>
    Array.from(
      { length: size },
      (_, x) => new GrassCell(getX(x, size), getY(y, size))
    )
  );

export class Map {
  /**
   * Размер карты (значение ширины и высоты) — нечетный
   */
  private size: number;
  /**
   * Данные карты в виде двухмерного массива клеток
   */
  private data: MapData;

  constructor(size: number) {
    this.size = size;
    this.data = createFlatMap(size);
  }

  /**
   * Собрать карту
   */
  build(): MapData {
    return this.data;
  }

  /**
   * Получить клетку по её координатам
   */
  getCell(x: Coordinate, y: Coordinate): Cell {
    return this.data[getXIndex(y, this.size)][getYIndex(x, this.size)];
  }
}
