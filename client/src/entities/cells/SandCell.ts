import {
  CELL_TYPE,
  CELL_PERMEABILITY,
  CELL_INTERACTIVITY,
} from "../../constants/cell";
import { Cell } from "../Cell";

export class SandCell extends Cell {
  type = CELL_TYPE.SAND;
  permeability = CELL_PERMEABILITY.PERMEABLE;
  interactivity = CELL_INTERACTIVITY.NON_INTERACTIVE;
}
