import { Creature } from "./Creature";
import type { Coordinate } from "../types/positioned";
import type { Inventory } from "../types/cube";
import type { Item } from "../types/item";

export class Cube extends Creature {
  readonly maxHealth = 100;
  protected health;

  /**
   * Инвентарь
   */
  protected inventory: Inventory;

  constructor(x: Coordinate, y: Coordinate) {
    super(x, y);

    this.health = this.maxHealth;
    this.inventory = {};
  }

  /**
   * Добавить некоторое количество предмета в инвентарь
   */
  addToInventory(item: Item, amount: number): void {
    if (this.inventory[item]) {
      this.inventory[item] = this.inventory[item]! + amount;
    } else {
      this.inventory[item] = amount;
    }
  }

  /**
   * Убрать некоторое количество предмета из инвентаря
   */
  removeFromInventory(item: Item, amount: number): void {
    if (this.inventory[item]) {
      this.inventory[item] = Math.max(0, this.inventory[item]! - amount);
    }
  }
}
