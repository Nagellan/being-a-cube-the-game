import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import type { Item } from '../types/item';
import { useRerender } from '../hooks/useRerender';
import { GAME_EVENT } from '../constants/game';
import { useGame } from '../hooks/useGame';
import { getItem } from './Cell';

const TIMEOUT = 150;
const RERENDER = [GAME_EVENT.ACTION];

type Items = [Item, number][];

export const Inventory = () => {
	const nodeRef = useRef<HTMLDivElement>(null);

	const { cube } = useGame();

	useRerender(RERENDER);

	const items = Object.entries(cube.getInventory()) as Items;

	return (
		<CSSTransition
			in={items.length > 0}
			nodeRef={nodeRef}
			timeout={TIMEOUT}
			classNames="inventory-"
			mountOnEnter
			unmountOnExit
		>
			<div
				ref={nodeRef}
				className="inventory"
				style={{ '--delay': `${TIMEOUT}ms` }}
			>
				{items.map(([key, count]) => {
					return (
						<div className="__item" key={key}>
							{getItem(key)}
							<div className="__count">{count}</div>
						</div>
					);
				})}
			</div>
		</CSSTransition>
	);
};
