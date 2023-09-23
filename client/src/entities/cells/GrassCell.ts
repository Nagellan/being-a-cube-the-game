import {
  CELL_TYPE,
  CELL_PERMEABILITY,
  CELL_INTERACTIVITY,
} from "../../constants/cell";
import { Cell } from "../Cell";

export class GrassCell extends Cell {
  type = CELL_TYPE.GRASS;
  permeability = CELL_PERMEABILITY.PERMEABLE;
  interactivity = CELL_INTERACTIVITY.NON_INTERACTIVE;
}
