import { Positioned } from "./Positioned";
import type { Coordinate, Position } from "../types/positioned";
import type { CellType } from "../types/cell";
import type { Item } from "../types/item";

const DELIMITER = "_";

/**
 * Создаёт id клетки по её координатам
 */
const createId = (x: Coordinate, y: Coordinate): string =>
  [x, y].join(DELIMITER);

/**
 * Парсит id клетки, возвращая её координаты
 */
const parseId = (id: string): Position => {
  const [x, y] = id.split(DELIMITER);

  return [Number(x), Number(y)];
};

/**
 * Клетка
 */
export abstract class Cell extends Positioned {
  static createId = createId;
  static parseId = parseId;

  /**
   * Тип клетки
   */
  abstract readonly type: CellType;
  /**
   * Проходимость клетки
   */
  abstract readonly permeable: boolean;

  // Координаты клетки не должны меняться
  declare readonly x: Coordinate;
  declare readonly y: Coordinate;

  /**
   * Предмет, установленный на клетку (или его отсутствие)
   */
  protected item: Item | null = null;

  constructor(x: Coordinate, y: Coordinate, item?: Item) {
    super(x, y);

    if (item) this.item = item;
  }

  /**
   * Уникальный идентификатор клетки
   */
  get id(): string {
    return createId(this.x, this.y);
  }

  /**
   * Имеется ли на клетке какой-либо предмет
   */
  get hasItem(): boolean {
    return this.item !== null;
  }

  /**
   * Можно ли взаимодействовать с клеткой
   */
  get interactive(): boolean {
    return this.hasItem;
  }

  /**
   * Установить предмет на клетку
   */
  setItem(item: Item): this {
    this.item = item;

    return this;
  }

  /**
   * Убрать предмет с клетки
   */
  resetItem(): void {
    this.item = null;
  }

  /**
   * Взаимодействовать с клеткой
   */
  interact(): void {
    if (this.interactive) {
      return this.resetItem();
    }

    throw new Error(
      `Клетка ${this.type} [${this.x}, ${this.y}] неинтерактивная`
    );
  }
}
