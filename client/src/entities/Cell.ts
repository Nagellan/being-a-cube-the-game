import { MapEntry } from "./MapEntry";
import type { IMapEntry } from "./MapEntry";
import type {
  CellType,
  CellPermeability,
  CellInteractivity,
} from "../types/cell";

interface ICell extends IMapEntry {
  readonly type: CellType;
  readonly permeability: CellPermeability;
  readonly interactivity: CellInteractivity;
}

export interface IInteractiveCell extends ICell {
  interact(): void;
}

/**
 * Клетка
 */
export abstract class Cell extends MapEntry implements ICell {
  // уникальные свойства
  public abstract readonly type: CellType;
  public abstract readonly permeability: CellPermeability;
  public abstract readonly interactivity: CellInteractivity;
}
