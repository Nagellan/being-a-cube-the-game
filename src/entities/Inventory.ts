import type { Item } from '../types/item';
import type { Slot } from '../types/inventory';

/**
 * Инвентарь существа
 */
export class Inventory {
	private items: Map<Item, number>;

	constructor() {
		this.items = new Map();
	}

	/**
	 * Количество занятых слотов инвентаря
	 */
	get size(): number {
		return this.items.size;
	}

	/**
	 * Слоты инвентаря
	 */
	get slots(): Slot[] {
		return [...this.items.entries()].map(([item, amount]) => ({
			item,
			amount,
		}));
	}

	/**
	 * Имеется ли в инвентаре предмет
	 */
	has(item: Item): boolean {
		return this.items.has(item);
	}

	/**
	 * Установить количество предмета
	 * Если передан 0, удаляет предмет из инвентаря полностью
	 */
	set(item: Item, amount: number) {
		if (amount < 0) {
			throw new Error(
				`Нельзя устанавливать отрицательное количество предмету инвентаря ${item}`,
			);
		} else if (amount === 0) {
			this.items.delete(item);
		} else {
			this.items.set(item, amount);
		}
	}

	/**
	 * Дополнить инвентарь предметом в нужном количестве
	 */
	add(item: Item, amount = 1): void {
		if (this.items.has(item)) {
			this.set(item, this.items.get(item)! + amount);
		} else {
			this.set(item, amount);
		}
	}

	/**
	 * Убрать из инвентаря предмет в нужном количестве
	 */
	subtract(item: Item, amount = 1): void {
		if (!this.items.has(item)) {
			throw new Error(
				`Не удалось убрать из инвентаря ${amount}шт. предмета ${item}, потому что его нет в инвентаре`,
			);
		}

		const currentItemAmount = this.items.get(item)!;
		const newItemAmount = currentItemAmount - amount;

		if (newItemAmount < 0) {
			throw new Error(
				`Не удалось убрать из инвентаря ${amount}шт. предмета ${item}, потому что его нет в инвентаре`,
			);
		} else if (newItemAmount === 0) {
			this.remove(item);
		} else {
			this.set(item, newItemAmount);
		}
	}

	/**
	 * Убрать из инвентаря предмет
	 */
	remove(item: Item): void {
		if (!this.items.has(item)) {
			throw new Error(
				`Не удалось убрать из инвентаря предмет ${item}, потому что его нет в инвентаре`,
			);
		}

		this.set(item, 0);
	}
}
