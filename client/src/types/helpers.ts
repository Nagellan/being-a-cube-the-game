/**
 * Получить все значения объекта в виде юнион-типа
 */
export type Values<T> = T[keyof T];
