import {
  CELL_TYPE,
  CELL_PERMEABILITY,
  CELL_INTERACTIVITY,
} from "../../constants/cell";
import { Cell } from "../Cell";
import type { IInteractiveCell } from "../Cell";

export class WaterWithFishCell extends Cell implements IInteractiveCell {
  type = CELL_TYPE.WATER_WITH_FISH;
  permeability = CELL_PERMEABILITY.PERMEABLE;
  interactivity = CELL_INTERACTIVITY.NON_INTERACTIVE;

  interact() {}
}
