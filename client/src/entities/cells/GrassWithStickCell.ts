import {
  CELL_TYPE,
  CELL_PERMEABILITY,
  CELL_INTERACTIVITY,
} from "../../constants/cell";
import { Cell } from "../Cell";
import type { IInteractiveCell } from "../Cell";

export class GrassWithStickCell extends Cell implements IInteractiveCell {
  type = CELL_TYPE.GRASS_WITH_STICK;
  permeability = CELL_PERMEABILITY.PERMEABLE;
  interactivity = CELL_INTERACTIVITY.INTERACTIVE;

  interact() {}
}
