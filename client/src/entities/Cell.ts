import type {
  CellType,
  CellPermeability,
  CellInteractivity,
  CellPosition,
} from "../types/cell";

interface ICell {
  readonly type: CellType;
  readonly permeability: CellPermeability;
  readonly interactivity: CellInteractivity;

  readonly x: number;
  readonly y: number;

  get position(): CellPosition;
}

export interface IInteractiveCell extends ICell {
  interact(): void;
}

/**
 * Клетка
 */
export abstract class Cell implements ICell {
  // уникальные свойства
  public abstract readonly type: CellType;
  public abstract readonly permeability: CellPermeability;
  public abstract readonly interactivity: CellInteractivity;

  // координаты
  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get position(): CellPosition {
    return [this.x, this.y];
  }
}
