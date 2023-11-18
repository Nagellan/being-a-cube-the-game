import React, { useMemo, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useGame } from '../hooks/useGame';
import { ITEM } from '../constants/item';
import type { CellType } from '../types/cell';
import type { Item } from '../types/item';

const TIMEOUT = 250;

export const getItem = (item: Item | null) => {
	switch (item) {
		case ITEM.STICK: {
			return '🌿';
		}
		case ITEM.STONE: {
			return '🪨';
		}
		case ITEM.FISH: {
			return '🐟';
		}
		default: {
			break;
		}
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
	const nodeRef = useRef<HTMLDivElement>(null);

	const { getCell, cube } = useGame();

	const cell = useMemo(() => getCell(id), [id]);
	const visible = cube.fov.includes(...cell.position);

	return (
		<div className={getClassName(cell.type, visible)}>
			<CSSTransition
				in={visible}
				nodeRef={nodeRef}
				timeout={TIMEOUT}
				classNames="__item-"
				mountOnEnter
				unmountOnExit
			>
				<div
					ref={nodeRef}
					className="__item"
					style={{ '--delay': `${TIMEOUT}ms` }}
				>
					{getItem(cell.item)}
				</div>
			</CSSTransition>
		</div>
	);
};
