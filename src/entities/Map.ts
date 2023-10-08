import { GrassCell } from "./cells/GrassCell";
import { getX, getY, getXIndex, getYIndex } from "../utils/geometry";
import { Cell } from "./Cell";
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
  readonly size: number;
  /**
   * Данные карты в виде двухмерного массива клеток
   */
  readonly data: MapData;

  constructor(size: number) {
    this.size = size;
    this.data = createFlatMap(size);
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
