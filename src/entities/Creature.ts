import { Positioned } from "./Positioned";
import type { Coordinate } from "../types/positioned";

type MoveListener = (x: Coordinate, y: Coordinate) => void;

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
   * Реакция на движение кубика
   */
  private moveListener: MoveListener | undefined;

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
    this.moveListener?.(x, y);

    return super.setPosition(x, y);
  }

  /**
   * Переместиться на одну клетку выше
   */
  moveUp(): void {
    this.move(this.x, this.y + 1);
  }

  /**
   * Переместиться на одну клетку ниже
   */
  moveDown(): void {
    this.move(this.x, this.y - 1);
  }

  /**
   * Переместиться на одну клетку правее
   */
  moveRight(): void {
    this.move(this.x + 1, this.y);
  }

  /**
   * Переместиться на одну клетку левее
   */
  moveLeft(): void {
    this.move(this.x - 1, this.y);
  }

  /**
   * Установить реакцию на движение кубика
   */
  listenToMove(moveListener: MoveListener) {
    this.moveListener = moveListener;
  }

  /**
   * Убрать реакцию на движение кубика
   */
  stopListenToMove() {
    this.moveListener = undefined;
  }
}
