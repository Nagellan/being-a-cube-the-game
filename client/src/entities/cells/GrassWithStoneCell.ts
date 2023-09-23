import {
  CELL_TYPE,
  CELL_PERMEABILITY,
  CELL_INTERACTIVITY,
} from "../../constants/cell";
import { Cell } from "../Cell";
import type { IInteractiveCell } from "../Cell";

export class GrassWithStoneCell extends Cell implements IInteractiveCell {
  type = CELL_TYPE.GRASS_WITH_STONE;
  permeability = CELL_PERMEABILITY.PERMEABLE;
  interactivity = CELL_INTERACTIVITY.INTERACTIVE;

  interact() {}
}
