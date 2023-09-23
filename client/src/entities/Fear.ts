import { Creature } from "./Creature";
import type { Coordinate } from "../types/positioned";
import type { Item } from "../types/item";

export class Fear extends Creature {
  readonly maxHealth = 100;
  protected health;

  constructor(x: Coordinate, y: Coordinate) {
    super(x, y);

    this.health = this.maxHealth;
  }
}
