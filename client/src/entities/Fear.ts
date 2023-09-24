import { Creature } from "./Creature";
import type { Coordinate } from "../types/positioned";

export class Fear extends Creature {
  /**
   * Максимальное здоровье
   */
  readonly maxHealth = 100;
  /**
   * Текущее здоровье
   */
  protected health;

  constructor(x: Coordinate, y: Coordinate) {
    super(x, y);

    this.health = this.maxHealth;
  }
}
