import type { Coordinate } from "../types/positioned";

/**
 * Получить координату X относительно центра матрицы
 *
 * @param xIndex координата X относительно левого-верхнего угла матрицы
 * @param size   радиус матрицы
 */
export const getX = (xIndex: number, size: number): Coordinate =>
  xIndex - Math.floor(size / 2);

/**
 * Получить координату Y относительно центра матрицы
 *
 * @param yIndex координата Y относительно левого-верхнего угла матрицы
 * @param size   радиус матрицы
 */
export const getY = (yIndex: number, size: number): Coordinate =>
  Math.floor(size / 2) - yIndex;

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
 * Степень уменьшения порога вхождения точки в окружность
 * Образуется более «округлая» окружность из точек
 */
const BEAUTY_COEFFICIENT = 0.6;

/**
 * Узнать, находится ли точка внутри окружности (включительно)
 *
 * @link https://math.stackexchange.com/a/198769
 *
 * @param xp                 координата X переданной точки
 * @param yp                 координата Y переданной точки
 * @param xc                 координата X центра окружности
 * @param yc                 координата Y центра окружности
 * @param r                  радиус окружности
 * @param thresholdReduction степень уменьшения порога вхождения точки в окружность
 */
export const getIsPointInsideCircle = (
  xp: number,
  yp: number,
  xc: number,
  yc: number,
  r: number,
  thresholdReduction = BEAUTY_COEFFICIENT
) => {
  const d = Math.sqrt(Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2));

  return Math.pow(d - thresholdReduction, 2) <= Math.pow(r, 2);
};
