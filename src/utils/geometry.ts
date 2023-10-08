import type { Coordinate } from "../types/positioned";

/**
 * Получить координату X относительно центра матрицы
 *
 * @param x    координата X относительно левого-верхнего угла матрицы
 * @param size радиус матрицы
 */
export const getX = (x: number, size: number): Coordinate =>
  x - Math.floor(size / 2);

/**
 * Получить координату Y относительно центра матрицы
 *
 * @param y    координата Y относительно левого-верхнего угла матрицы
 * @param size радиус матрицы
 */
export const getY = (y: number, size: number): Coordinate =>
  Math.floor(size / 2) - y;

/**
 * Получить координату X относительно левого-верхнего угла матрицы
 *
 * @param x    координата X относительно центра матрицы
 * @param size радиус матрицы
 */
export const getXIndex = (x: Coordinate, size: number): number =>
  Math.floor(size / 2) + x;

/**
 * Получить координату Y относительно левого-верхнего угла матрицы
 *
 * @param y    координата Y относительно центра матрицы
 * @param size радиус матрицы
 */
export const getYIndex = (y: Coordinate, size: number): number =>
  Math.floor(size / 2) - y;

/**
 * Узнать, находится ли точка внутри окружности (включительно)
 *
 * @link https://math.stackexchange.com/a/198769
 *
 * @param xp координата X переданной точки
 * @param yp координата Y переданной точки
 * @param xc координата X центра окружности
 * @param yc координата Y центра окружности
 * @param r  радиус окружности
 */
export const getIsPointInsideCircle = (
  xp: number,
  yp: number,
  xc: number,
  yc: number,
  r: number
) => {
  const d = Math.sqrt(Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2));

  return Math.pow(d, 2) <= Math.pow(r, 2);
};
