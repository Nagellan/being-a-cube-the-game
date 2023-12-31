import { WaterCell } from '../entities/cells/WaterCell';
import { GrassCell } from '../entities/cells/GrassCell';
import { SandCell } from '../entities/cells/SandCell';
import { ITEM } from '../constants/item';
import type { MapData } from '../types/map';

export const MAP: MapData = [
	[
		new WaterCell(-12, 12),
		new WaterCell(-11, 12),
		new WaterCell(-10, 12),
		new WaterCell(-9, 12),
		new WaterCell(-8, 12),
		new WaterCell(-7, 12),
		new WaterCell(-6, 12),
		new WaterCell(-5, 12),
		new WaterCell(-4, 12),
		new WaterCell(-3, 12),
		new WaterCell(-2, 12),
		new WaterCell(-1, 12),
		new WaterCell(0, 12),
		new WaterCell(1, 12, ITEM.FISH),
		new WaterCell(2, 12),
		new WaterCell(3, 12),
		new WaterCell(4, 12),
		new WaterCell(5, 12),
		new WaterCell(6, 12),
		new WaterCell(7, 12),
		new WaterCell(8, 12),
		new WaterCell(9, 12),
		new WaterCell(10, 12),
		new WaterCell(11, 12),
		new WaterCell(12, 12),
	],
	[
		new WaterCell(-12, 11),
		new WaterCell(-11, 11),
		new WaterCell(-10, 11),
		new WaterCell(-9, 11),
		new WaterCell(-8, 11),
		new WaterCell(-7, 11),
		new WaterCell(-6, 11, ITEM.FISH),
		new SandCell(-5, 11),
		new SandCell(-4, 11),
		new SandCell(-3, 11),
		new SandCell(-2, 11),
		new SandCell(-1, 11),
		new SandCell(0, 11),
		new SandCell(1, 11),
		new SandCell(2, 11),
		new SandCell(3, 11),
		new SandCell(4, 11),
		new SandCell(5, 11),
		new WaterCell(6, 11),
		new WaterCell(7, 11),
		new WaterCell(8, 11),
		new WaterCell(9, 11),
		new WaterCell(10, 11),
		new WaterCell(11, 11),
		new WaterCell(12, 11),
	],
	[
		new WaterCell(-12, 10),
		new WaterCell(-11, 10),
		new WaterCell(-10, 10),
		new WaterCell(-9, 10),
		new SandCell(-8, 10),
		new SandCell(-7, 10),
		new SandCell(-6, 10),
		new SandCell(-5, 10),
		new SandCell(-4, 10),
		new SandCell(-3, 10),
		new SandCell(-2, 10),
		new SandCell(-1, 10),
		new SandCell(0, 10),
		new SandCell(1, 10),
		new SandCell(2, 10),
		new SandCell(3, 10),
		new SandCell(4, 10),
		new SandCell(5, 10),
		new SandCell(6, 10),
		new SandCell(7, 10),
		new SandCell(8, 10),
		new WaterCell(9, 10, ITEM.FISH),
		new WaterCell(10, 10),
		new WaterCell(11, 10),
		new WaterCell(12, 10),
	],
	[
		new WaterCell(-12, 9),
		new WaterCell(-11, 9),
		new WaterCell(-10, 9),
		new SandCell(-9, 9),
		new SandCell(-8, 9),
		new SandCell(-7, 9),
		new SandCell(-6, 9),
		new GrassCell(-5, 9),
		new GrassCell(-4, 9),
		new GrassCell(-3, 9),
		new GrassCell(-2, 9),
		new GrassCell(-1, 9),
		new GrassCell(0, 9),
		new GrassCell(1, 9),
		new GrassCell(2, 9),
		new GrassCell(3, 9),
		new GrassCell(4, 9, ITEM.STICK),
		new GrassCell(5, 9),
		new SandCell(6, 9),
		new SandCell(7, 9),
		new SandCell(8, 9),
		new SandCell(9, 9),
		new WaterCell(10, 9),
		new WaterCell(11, 9),
		new WaterCell(12, 9),
	],
	[
		new WaterCell(-12, 8),
		new WaterCell(-11, 8),
		new SandCell(-10, 8),
		new SandCell(-9, 8, ITEM.STONE),
		new SandCell(-8, 8),
		new GrassCell(-7, 8),
		new GrassCell(-6, 8),
		new GrassCell(-5, 8),
		new GrassCell(-4, 8),
		new GrassCell(-3, 8),
		new GrassCell(-2, 8, ITEM.STICK),
		new GrassCell(-1, 8),
		new GrassCell(0, 8),
		new GrassCell(1, 8),
		new GrassCell(2, 8),
		new GrassCell(3, 8),
		new GrassCell(4, 8),
		new GrassCell(5, 8),
		new GrassCell(6, 8),
		new GrassCell(7, 8),
		new SandCell(8, 8),
		new SandCell(9, 8),
		new SandCell(10, 8),
		new WaterCell(11, 8, ITEM.FISH),
		new WaterCell(12, 8),
	],
	[
		new WaterCell(-12, 7),
		new WaterCell(-11, 7, ITEM.FISH),
		new SandCell(-10, 7),
		new SandCell(-9, 7),
		new GrassCell(-8, 7),
		new GrassCell(-7, 7),
		new GrassCell(-6, 7),
		new GrassCell(-5, 7),
		new GrassCell(-4, 7, ITEM.STONE),
		new GrassCell(-3, 7),
		new GrassCell(-2, 7),
		new GrassCell(-1, 7),
		new GrassCell(0, 7),
		new GrassCell(1, 7),
		new GrassCell(2, 7),
		new GrassCell(3, 7),
		new GrassCell(4, 7),
		new GrassCell(5, 7),
		new GrassCell(6, 7),
		new GrassCell(7, 7),
		new GrassCell(8, 7),
		new SandCell(9, 7),
		new SandCell(10, 7),
		new WaterCell(11, 7),
		new WaterCell(12, 7),
	],
	[
		new WaterCell(-12, 6),
		new WaterCell(-11, 6),
		new SandCell(-10, 6),
		new SandCell(-9, 6),
		new GrassCell(-8, 6),
		new GrassCell(-7, 6),
		new GrassCell(-6, 6, ITEM.STICK),
		new GrassCell(-5, 6),
		new GrassCell(-4, 6),
		new GrassCell(-3, 6),
		new GrassCell(-2, 6),
		new GrassCell(-1, 6),
		new GrassCell(0, 6),
		new GrassCell(1, 6),
		new GrassCell(2, 6),
		new GrassCell(3, 6),
		new GrassCell(4, 6),
		new GrassCell(5, 6),
		new GrassCell(6, 6),
		new GrassCell(7, 6),
		new GrassCell(8, 6, ITEM.STONE),
		new SandCell(9, 6),
		new SandCell(10, 6),
		new WaterCell(11, 6),
		new WaterCell(12, 6),
	],
	[
		new WaterCell(-12, 5, ITEM.FISH),
		new SandCell(-11, 5, ITEM.STONE),
		new SandCell(-10, 5),
		new GrassCell(-9, 5),
		new GrassCell(-8, 5),
		new GrassCell(-7, 5),
		new GrassCell(-6, 5),
		new GrassCell(-5, 5),
		new GrassCell(-4, 5),
		new GrassCell(-3, 5),
		new GrassCell(-2, 5),
		new GrassCell(-1, 5),
		new GrassCell(0, 5),
		new GrassCell(1, 5),
		new GrassCell(2, 5),
		new GrassCell(3, 5),
		new GrassCell(4, 5, ITEM.STONE),
		new GrassCell(5, 5),
		new GrassCell(6, 5),
		new GrassCell(7, 5),
		new GrassCell(8, 5),
		new GrassCell(9, 5),
		new SandCell(10, 5),
		new SandCell(11, 5),
		new WaterCell(12, 5),
	],
	[
		new WaterCell(-12, 4),
		new SandCell(-11, 4),
		new SandCell(-10, 4),
		new GrassCell(-9, 4),
		new GrassCell(-8, 4),
		new GrassCell(-7, 4),
		new GrassCell(-6, 4),
		new GrassCell(-5, 4),
		new GrassCell(-4, 4),
		new GrassCell(-3, 4),
		new GrassCell(-2, 4),
		new GrassCell(-1, 4),
		new GrassCell(0, 4),
		new GrassCell(1, 4, ITEM.STICK),
		new GrassCell(2, 4),
		new GrassCell(3, 4),
		new GrassCell(4, 4),
		new GrassCell(5, 4),
		new GrassCell(6, 4),
		new GrassCell(7, 4),
		new GrassCell(8, 4),
		new GrassCell(9, 4),
		new SandCell(10, 4),
		new SandCell(11, 4),
		new WaterCell(12, 4),
	],
	[
		new WaterCell(-12, 3),
		new SandCell(-11, 3),
		new SandCell(-10, 3),
		new GrassCell(-9, 3),
		new GrassCell(-8, 3),
		new GrassCell(-7, 3),
		new GrassCell(-6, 3),
		new GrassCell(-5, 3),
		new GrassCell(-4, 3, ITEM.STONE),
		new GrassCell(-3, 3),
		new GrassCell(-2, 3),
		new GrassCell(-1, 3),
		new GrassCell(0, 3),
		new GrassCell(1, 3),
		new GrassCell(2, 3),
		new GrassCell(3, 3),
		new GrassCell(4, 3),
		new GrassCell(5, 3),
		new GrassCell(6, 3),
		new GrassCell(7, 3),
		new GrassCell(8, 3),
		new GrassCell(9, 3),
		new SandCell(10, 3),
		new SandCell(11, 3),
		new WaterCell(12, 3, ITEM.FISH),
	],
	[
		new WaterCell(-12, 2),
		new SandCell(-11, 2),
		new SandCell(-10, 2),
		new GrassCell(-9, 2),
		new GrassCell(-8, 2),
		new GrassCell(-7, 2),
		new GrassCell(-6, 2),
		new GrassCell(-5, 2),
		new GrassCell(-4, 2),
		new GrassCell(-3, 2),
		new GrassCell(-2, 2),
		new GrassCell(-1, 2),
		new GrassCell(0, 2),
		new GrassCell(1, 2),
		new GrassCell(2, 2),
		new GrassCell(3, 2),
		new GrassCell(4, 2),
		new GrassCell(5, 2),
		new GrassCell(6, 2, ITEM.STICK),
		new GrassCell(7, 2),
		new GrassCell(8, 2),
		new GrassCell(9, 2),
		new SandCell(10, 2),
		new SandCell(11, 2),
		new WaterCell(12, 2),
	],
	[
		new WaterCell(-12, 1),
		new SandCell(-11, 1),
		new SandCell(-10, 1),
		new GrassCell(-9, 1),
		new GrassCell(-8, 1, ITEM.STONE),
		new GrassCell(-7, 1),
		new GrassCell(-6, 1),
		new GrassCell(-5, 1),
		new GrassCell(-4, 1),
		new GrassCell(-3, 1),
		new GrassCell(-2, 1),
		new GrassCell(-1, 1),
		new GrassCell(0, 1),
		new GrassCell(1, 1),
		new GrassCell(2, 1),
		new GrassCell(3, 1),
		new GrassCell(4, 1, ITEM.STICK),
		new GrassCell(5, 1),
		new GrassCell(6, 1),
		new GrassCell(7, 1),
		new GrassCell(8, 1),
		new GrassCell(9, 1),
		new SandCell(10, 1),
		new SandCell(11, 1),
		new WaterCell(12, 1),
	],
	[
		new WaterCell(-12, 0),
		new SandCell(-11, 0),
		new SandCell(-10, 0),
		new GrassCell(-9, 0),
		new GrassCell(-8, 0),
		new GrassCell(-7, 0),
		new GrassCell(-6, 0),
		new GrassCell(-5, 0, ITEM.STICK),
		new GrassCell(-4, 0),
		new GrassCell(-3, 0),
		new GrassCell(-2, 0),
		new GrassCell(-1, 0),
		new GrassCell(0, 0),
		new GrassCell(1, 0),
		new GrassCell(2, 0),
		new GrassCell(3, 0),
		new GrassCell(4, 0),
		new GrassCell(5, 0),
		new GrassCell(6, 0),
		new GrassCell(7, 0),
		new GrassCell(8, 0),
		new GrassCell(9, 0),
		new SandCell(10, 0, ITEM.STONE),
		new SandCell(11, 0),
		new WaterCell(12, 0),
	],
	[
		new WaterCell(-12, -1),
		new SandCell(-11, -1),
		new SandCell(-10, -1),
		new GrassCell(-9, -1),
		new GrassCell(-8, -1),
		new GrassCell(-7, -1),
		new GrassCell(-6, -1),
		new GrassCell(-5, -1),
		new GrassCell(-4, -1),
		new GrassCell(-3, -1),
		new GrassCell(-2, -1),
		new GrassCell(-1, -1),
		new GrassCell(0, -1),
		new GrassCell(1, -1),
		new GrassCell(2, -1, ITEM.STONE),
		new GrassCell(3, -1),
		new GrassCell(4, -1),
		new GrassCell(5, -1),
		new GrassCell(6, -1),
		new GrassCell(7, -1),
		new GrassCell(8, -1, ITEM.STICK),
		new GrassCell(9, -1),
		new SandCell(10, -1),
		new SandCell(11, -1),
		new WaterCell(12, -1, ITEM.FISH),
	],
	[
		new WaterCell(-12, -2),
		new SandCell(-11, -2),
		new SandCell(-10, -2),
		new GrassCell(-9, -2),
		new GrassCell(-8, -2),
		new GrassCell(-7, -2),
		new GrassCell(-6, -2),
		new GrassCell(-5, -2),
		new GrassCell(-4, -2),
		new GrassCell(-3, -2),
		new GrassCell(-2, -2),
		new GrassCell(-1, -2),
		new GrassCell(0, -2, ITEM.STICK),
		new GrassCell(1, -2),
		new GrassCell(2, -2),
		new GrassCell(3, -2),
		new GrassCell(4, -2),
		new GrassCell(5, -2),
		new GrassCell(6, -2),
		new GrassCell(7, -2),
		new GrassCell(8, -2),
		new GrassCell(9, -2),
		new SandCell(10, -2),
		new SandCell(11, -2),
		new WaterCell(12, -2),
	],
	[
		new WaterCell(-12, -3),
		new SandCell(-11, -3),
		new SandCell(-10, -3),
		new GrassCell(-9, -3),
		new GrassCell(-8, -3),
		new GrassCell(-7, -3),
		new GrassCell(-6, -3, ITEM.STONE),
		new GrassCell(-5, -3),
		new GrassCell(-4, -3),
		new GrassCell(-3, -3),
		new GrassCell(-2, -3),
		new GrassCell(-1, -3),
		new GrassCell(0, -3),
		new GrassCell(1, -3),
		new GrassCell(2, -3),
		new GrassCell(3, -3),
		new GrassCell(4, -3),
		new GrassCell(5, -3, ITEM.STICK),
		new GrassCell(6, -3),
		new GrassCell(7, -3),
		new GrassCell(8, -3),
		new GrassCell(9, -3),
		new SandCell(10, -3),
		new SandCell(11, -3),
		new WaterCell(12, -3),
	],
	[
		new WaterCell(-12, -4, ITEM.FISH),
		new SandCell(-11, -4),
		new SandCell(-10, -4),
		new GrassCell(-9, -4),
		new GrassCell(-8, -4),
		new GrassCell(-7, -4),
		new GrassCell(-6, -4),
		new GrassCell(-5, -4),
		new GrassCell(-4, -4),
		new GrassCell(-3, -4),
		new GrassCell(-2, -4),
		new GrassCell(-1, -4),
		new GrassCell(0, -4),
		new GrassCell(1, -4),
		new GrassCell(2, -4),
		new GrassCell(3, -4),
		new GrassCell(4, -4),
		new GrassCell(5, -4),
		new GrassCell(6, -4),
		new GrassCell(7, -4),
		new GrassCell(8, -4),
		new GrassCell(9, -4),
		new SandCell(10, -4),
		new SandCell(11, -4),
		new WaterCell(12, -4),
	],
	[
		new WaterCell(-12, -5),
		new SandCell(-11, -5),
		new SandCell(-10, -5),
		new GrassCell(-9, -5),
		new GrassCell(-8, -5),
		new GrassCell(-7, -5),
		new GrassCell(-6, -5),
		new GrassCell(-5, -5),
		new GrassCell(-4, -5, ITEM.STICK),
		new GrassCell(-3, -5, ITEM.STONE),
		new GrassCell(-2, -5),
		new GrassCell(-1, -5),
		new GrassCell(0, -5),
		new GrassCell(1, -5),
		new GrassCell(2, -5),
		new GrassCell(3, -5),
		new GrassCell(4, -5),
		new GrassCell(5, -5, ITEM.STONE),
		new GrassCell(6, -5),
		new GrassCell(7, -5),
		new GrassCell(8, -5),
		new GrassCell(9, -5),
		new SandCell(10, -5),
		new SandCell(11, -5),
		new WaterCell(12, -5),
	],
	[
		new WaterCell(-12, -6),
		new WaterCell(-11, -6),
		new SandCell(-10, -6),
		new SandCell(-9, -6),
		new GrassCell(-8, -6),
		new GrassCell(-7, -6),
		new GrassCell(-6, -6),
		new GrassCell(-5, -6),
		new GrassCell(-4, -6),
		new GrassCell(-3, -6),
		new GrassCell(-2, -6),
		new GrassCell(-1, -6),
		new GrassCell(0, -6),
		new GrassCell(1, -6),
		new GrassCell(2, -6),
		new GrassCell(3, -6),
		new GrassCell(4, -6),
		new GrassCell(5, -6),
		new GrassCell(6, -6),
		new GrassCell(7, -6),
		new GrassCell(8, -6),
		new SandCell(9, -6),
		new SandCell(10, -6),
		new WaterCell(11, -6),
		new WaterCell(12, -6),
	],
	[
		new WaterCell(-12, -7),
		new WaterCell(-11, -7, ITEM.FISH),
		new SandCell(-10, -7),
		new SandCell(-9, -7),
		new GrassCell(-8, -7, ITEM.STICK),
		new GrassCell(-7, -7),
		new GrassCell(-6, -7),
		new GrassCell(-5, -7),
		new GrassCell(-4, -7, ITEM.STICK),
		new GrassCell(-3, -7),
		new GrassCell(-2, -7),
		new GrassCell(-1, -7),
		new GrassCell(0, -7),
		new GrassCell(1, -7),
		new GrassCell(2, -7),
		new GrassCell(3, -7),
		new GrassCell(4, -7),
		new GrassCell(5, -7),
		new GrassCell(6, -7),
		new GrassCell(7, -7),
		new GrassCell(8, -7),
		new SandCell(9, -7),
		new SandCell(10, -7),
		new WaterCell(11, -7),
		new WaterCell(12, -7),
	],
	[
		new WaterCell(-12, -8),
		new WaterCell(-11, -8),
		new SandCell(-10, -8),
		new SandCell(-9, -8),
		new SandCell(-8, -8),
		new GrassCell(-7, -8),
		new GrassCell(-6, -8),
		new GrassCell(-5, -8),
		new GrassCell(-4, -8),
		new GrassCell(-3, -8),
		new GrassCell(-2, -8),
		new GrassCell(-1, -8),
		new GrassCell(0, -8, ITEM.STONE),
		new GrassCell(1, -8),
		new GrassCell(2, -8),
		new GrassCell(3, -8),
		new GrassCell(4, -8),
		new GrassCell(5, -8),
		new GrassCell(6, -8),
		new GrassCell(7, -8),
		new SandCell(8, -8, ITEM.STICK),
		new SandCell(9, -8),
		new SandCell(10, -8),
		new WaterCell(11, -8),
		new WaterCell(12, -8),
	],
	[
		new WaterCell(-12, -9),
		new WaterCell(-11, -9),
		new WaterCell(-10, -9),
		new SandCell(-9, -9),
		new SandCell(-8, -9),
		new SandCell(-7, -9, ITEM.STONE),
		new SandCell(-6, -9),
		new GrassCell(-5, -9),
		new GrassCell(-4, -9),
		new GrassCell(-3, -9, ITEM.STONE),
		new GrassCell(-2, -9),
		new GrassCell(-1, -9),
		new GrassCell(0, -9),
		new GrassCell(1, -9),
		new GrassCell(2, -9),
		new GrassCell(3, -9),
		new GrassCell(4, -9, ITEM.STICK),
		new GrassCell(5, -9),
		new SandCell(6, -9),
		new SandCell(7, -9),
		new SandCell(8, -9),
		new SandCell(9, -9),
		new WaterCell(10, -9, ITEM.FISH),
		new WaterCell(11, -9),
		new WaterCell(12, -9),
	],
	[
		new WaterCell(-12, -10),
		new WaterCell(-11, -10),
		new WaterCell(-10, -10),
		new WaterCell(-9, -10),
		new SandCell(-8, -10),
		new SandCell(-7, -10),
		new SandCell(-6, -10),
		new SandCell(-5, -10),
		new SandCell(-4, -10),
		new SandCell(-3, -10),
		new SandCell(-2, -10),
		new SandCell(-1, -10),
		new SandCell(0, -10),
		new SandCell(1, -10),
		new SandCell(2, -10),
		new SandCell(3, -10),
		new SandCell(4, -10),
		new SandCell(5, -10, ITEM.STONE),
		new SandCell(6, -10),
		new SandCell(7, -10),
		new SandCell(8, -10),
		new WaterCell(9, -10),
		new WaterCell(10, -10),
		new WaterCell(11, -10),
		new WaterCell(12, -10),
	],
	[
		new WaterCell(-12, -11),
		new WaterCell(-11, -11),
		new WaterCell(-10, -11),
		new WaterCell(-9, -11),
		new WaterCell(-8, -11),
		new WaterCell(-7, -11),
		new WaterCell(-6, -11, ITEM.FISH),
		new SandCell(-5, -11),
		new SandCell(-4, -11),
		new SandCell(-3, -11),
		new SandCell(-2, -11),
		new SandCell(-1, -11),
		new SandCell(0, -11),
		new SandCell(1, -11),
		new SandCell(2, -11),
		new SandCell(3, -11),
		new SandCell(4, -11),
		new SandCell(5, -11),
		new WaterCell(6, -11),
		new WaterCell(7, -11),
		new WaterCell(8, -11),
		new WaterCell(9, -11),
		new WaterCell(10, -11),
		new WaterCell(11, -11),
		new WaterCell(12, -11),
	],
	[
		new WaterCell(-12, -12),
		new WaterCell(-11, -12),
		new WaterCell(-10, -12),
		new WaterCell(-9, -12),
		new WaterCell(-8, -12),
		new WaterCell(-7, -12),
		new WaterCell(-6, -12),
		new WaterCell(-5, -12),
		new WaterCell(-4, -12),
		new WaterCell(-3, -12),
		new WaterCell(-2, -12),
		new WaterCell(-1, -12),
		new WaterCell(0, -12),
		new WaterCell(1, -12),
		new WaterCell(2, -12),
		new WaterCell(3, -12, ITEM.FISH),
		new WaterCell(4, -12),
		new WaterCell(5, -12),
		new WaterCell(6, -12),
		new WaterCell(7, -12),
		new WaterCell(8, -12),
		new WaterCell(9, -12),
		new WaterCell(10, -12),
		new WaterCell(11, -12),
		new WaterCell(12, -12),
	],
];
