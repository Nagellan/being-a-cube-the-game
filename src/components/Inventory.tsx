import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useRerender } from '../hooks/useRerender';
import { GAME_EVENT } from '../constants/game';
import { useGame } from '../hooks/useGame';
import { getItem } from './Cell';

const TIMEOUT = 150;
const RERENDER = [GAME_EVENT.ACTION];

export const Inventory = () => {
	const nodeRef = useRef<HTMLDivElement>(null);

	const { cube } = useGame();
	const { size, slots } = cube.inventory;

	useRerender(RERENDER);

	return (
		<CSSTransition
			in={size > 0}
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
				{slots.map(({ item, amount }) => {
					return (
						<div className="__item" key={item}>
							{getItem(item)}
							<div className="__count">{amount}</div>
						</div>
					);
				})}
			</div>
		</CSSTransition>
	);
};
