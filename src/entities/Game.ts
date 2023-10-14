import { Cube } from "./Cube";
import { FOV } from "./FOV";
import { Fear } from "./Fear";
import { Map } from "./Map";
import type { Position } from "../types/positioned";

export class Game {
  /**
   * Время существования мира (в часах)
   */
  private lifetime: number;

  /**
   * Время начала игры (от 0 до 23)
   */
  private startTime: number;

  /**
   * Карта мира
   */
  readonly map: Map;
  /**
   * Кубик — гг, управляемый персонаж
   */
  readonly cube: Cube;
  /**
   * Страхи — враги кубика
   */
  readonly fears: Fear[];

  /**
   * Таймер времени существования мира
   */
  private lifetimeTimer: Timer | null;

  constructor() {
    this.lifetime = 0;
    this.startTime = 12;

    this.map = new Map(15);

    const initialPosition: Position = [0, 0];
    const fov = new FOV(initialPosition, 2, this.map);

    this.cube = new Cube(initialPosition, fov);
    this.fears = [];

    this.lifetimeTimer = null;
  }

  /**
   * Время от 0 до 23, где 0 — полночь, а 12 — полдень
   */
  get time(): number {
    return (this.startTime + this.lifetime) % 24;
  }

  /**
   * Время суток — утро (с 6 до 12)
   */
  get isMorning(): boolean {
    return this.time >= 6 && this.time < 12;
  }

  /**
   * Время суток — день (с 12 до 18)
   */
  get isAfternoon(): boolean {
    return this.time >= 12 && this.time < 18;
  }

  /**
   * Время суток — вечер (с 18 до полуночи)
   */
  get isEvening(): boolean {
    return this.time >= 18;
  }

  /**
   * Время суток — ночь (с полуночи до 6)
   */
  get isNight(): boolean {
    return this.time < 6;
  }

  /**
   * Среагировать на нажатие пользователем клавиш
   */
  protected onKeyDown = (event: KeyboardEvent): void => {
    try {
      switch (event.code) {
        // Ход вверх
        case "KeyW":
          this.cube.moveUp();
          break;

        // Ход вниз
        case "KeyS":
          this.cube.moveDown();
          break;

        // Ход вправо
        case "KeyD":
          this.cube.moveRight();
          break;

        // Ход влево
        case "KeyA":
          this.cube.moveLeft();
          break;

        default:
          // игнорируем нажатия на любые другие клавиши
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Запустить мир
   */
  start(): void {
    // Запуск отсчёта времени мира
    this.lifetimeTimer = setInterval(() => {
      this.lifetime += 1;
    }, 5 * 60 * 1000);

    // Запуск отслеживания действий игрока
    window.addEventListener("keydown", this.onKeyDown);
  }

  /**
   * Остановить мир
   */
  stop(): void {
    // Остановка отсчёта времени мира
    if (this.lifetimeTimer) {
      clearInterval(this.lifetimeTimer);
      this.lifetimeTimer = null;
    }

    // Остановка отслеживания действий игрока
    window.removeEventListener("keydown", this.onKeyDown);
  }
}
