import { Positioned } from "./Positioned";
import type { IPositioned } from "./Positioned";
import type { Coordinate } from "../types/positioned";
import type { CellType, CellItem } from "../types/cell";

interface ICell extends IPositioned {
  /**
   * Тип клетки
   */
  readonly type: CellType;
  /**
   * Проходимость клетки
   */
  readonly permeable: boolean;

  /**
   * Имеется ли на клетке какой-либо предмет
   */
  hasItem: boolean;
  /**
   * Установить предмет на клетку
   */
  setItem(item: CellItem): ICell;
  /**
   * Убрать предмет с клетки
   */
  resetItem(): void;

  /**
   * Можно ли взаимодействовать с клеткой
   */
  interactive: boolean;
  /**
   * Взаимодействовать с клеткой
   */
  interact(): void;
}

/**
 * Клетка
 */
export abstract class Cell extends Positioned implements ICell {
  abstract readonly type: CellType;
  abstract readonly permeable: boolean;

  protected item: CellItem | null = null;

  constructor(x: Coordinate, y: Coordinate, item?: CellItem) {
    super(x, y);

    if (item) this.item = item;
  }

  get hasItem(): boolean {
    return this.item !== null;
  }

  get interactive(): boolean {
    return this.hasItem;
  }

  setItem(item: CellItem): this {
    this.item = item;

    return this;
  }

  resetItem(): void {
    this.item = null;
  }

  interact(): void {
    if (this.interactive) {
      return this.resetItem();
    }

    throw new Error(
      `Клетка ${this.type} [${this.x}, ${this.y}] неинтерактивная`
    );
  }
}
