import React, { useMemo } from 'react';

import { useGame } from '../hooks/useGame';
import { ITEM } from '../constants/item';
import type { CellType } from '../types/cell';
import type { Item } from '../types/item';

const getItem = (item: Item | null) => {
	switch (item) {
		case ITEM.STICK: {
			return '🦯';
		}
		case ITEM.STONE: {
			return '🪨';
		}
		case ITEM.FISH: {
			return '🐟';
		}
		default:
			break;
	}
};

const getClassName = (type: CellType, visible: boolean) => {
	let className = '__cell';

	if (visible) {
		className += ` __cell--${type.toLowerCase()}`;
	} else {
		className += ' __cell--blank';
	}

	return className;
};

type Props = {
	id: string;
};

export const Cell = ({ id }: Props) => {
	const { getCell, cube } = useGame();

	const cell = useMemo(() => getCell(id), [id]);

	return (
		<div
			className={getClassName(
				cell.type,
				cube.fov.includes(...cell.position),
			)}
		>
			{getItem(cell.item)}
		</div>
	);
};
