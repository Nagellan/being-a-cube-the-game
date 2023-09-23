import type { Item } from "./item";

/**
 * Инвентарь кубика
 */
export type Inventory = Partial<Record<Item, number>>;
