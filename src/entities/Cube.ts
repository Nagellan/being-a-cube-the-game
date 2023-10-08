import { Creature } from "./Creature";
import { FOV } from "./FOV";
import type { Coordinate } from "../types/positioned";
import type { Inventory } from "../types/cube";
import type { Item } from "../types/item";

export class Cube extends Creature {
  /**
   * Максимальное здоровье
   */
  readonly maxHealth = 100;
  /**
   * Текущее здоровье
   */
  protected health;

  /**
   * Поле зрения
   */
  readonly fov: FOV;

  /**
   * Инвентарь
   */
  protected inventory: Inventory;

  constructor(x: Coordinate, y: Coordinate) {
    super(x, y);

    this.health = this.maxHealth;
    this.inventory = {};
    this.fov = new FOV(x, y, 2);
  }

  /**
   * Переместить кубик
   */
  move(x: Coordinate, y: Coordinate) {
    // FIXME: кубик вылезает за пределы карты

    // Координаты кубика всегда должны быть центром его поля зрения
    this.fov.setPosition(x, y);

    super.move(x, y);
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
