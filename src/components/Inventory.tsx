import React from 'react';

import { useGame } from '../hooks/useGame';
import { getItem } from './Cell';

export const Inventory = () => {
	const { cube } = useGame();
	const { slots } = cube.inventory;

	return (
		<div className="inventory">
			{slots.map(({ item, amount }) => {
				return (
					<div className="__item" key={item}>
						{getItem(item)}
						<div className="__count">{amount}</div>
					</div>
				);
			})}
		</div>
	);
};
