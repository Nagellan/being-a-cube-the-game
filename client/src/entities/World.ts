import { Cube } from "./Cube";
import { Fear } from "./Fear";
import { Map } from "./Map";

export class World {
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
  private map: Map;
  /**
   * Кубик — гг, управляемый персонаж
   */
  private cube: Cube;
  /**
   * Страхи — враги кубика
   */
  private fears: Fear[];

  constructor() {
    this.lifetime = 0;
    this.startTime = 12;

    this.map = new Map(15);
    this.cube = new Cube(0, 0);
    this.fears = [];
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
  get isMorning() {
    return this.time >= 6 && this.time < 12;
  }

  /**
   * Время суток — день (с 12 до 18)
   */
  get isAfternoon() {
    return this.time >= 12 && this.time < 18;
  }

  /**
   * Время суток — вечер (с 18 до полуночи)
   */
  get isEvening() {
    return this.time >= 18;
  }

  /**
   * Время суток — ночь (с полуночи до 6)
   */
  get isNight() {
    return this.time < 6;
  }

  /**
   * Создать новый мир
   */
  create() {
    // Запуск отсчёта времени мира
    setInterval(() => {
      this.lifetime += 1;
    }, 10 * 60 * 1000);
  }
}
