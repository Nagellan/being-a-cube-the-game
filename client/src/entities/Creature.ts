import { Positioned } from "./Positioned";
import type { Coordinate } from "../types/positioned";

export abstract class Creature extends Positioned {
  /**
   * Максимальное здоровье
   */
  abstract readonly maxHealth: number;
  /**
   * Текущее здоровье
   */
  protected abstract health: number;

  /**
   * Мёртво ли существо
   */
  get dead(): boolean {
    return this.health <= 0;
  }

  /**
   * Поменять позицию на карте
   */
  move(x: Coordinate, y: Coordinate): void {
    return super.setPosition(x, y);
  }

  /**
   * Переместиться на одну клетку выше
   */
  moveUp(): void {
    this.y += 1;
  }

  /**
   * Переместиться на одну клетку ниже
   */
  moveDown(): void {
    this.y -= 1;
  }

  /**
   * Переместиться на одну клетку правее
   */
  moveRight(): void {
    this.x += 1;
  }

  /**
   * Переместиться на одну клетку левее
   */
  moveLeft(): void {
    this.x -= 1;
  }
}
