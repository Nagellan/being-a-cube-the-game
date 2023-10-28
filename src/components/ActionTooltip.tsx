import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';

import { useGame } from '../hooks/useGame';
import { Tooltip } from './Tooltip';

type Props = {
	children: ReactElement;
};

export const ActionTooltip = ({ children }: Props) => {
	const { cube } = useGame();

	const [position, setPosition] = useState(cube.position);

	// TODO: вынести в useGame
	useEffect(() => {
		const id = cube.listenToMove((x, y) => {
			setPosition([x, y]);
		});

		return () => {
			cube.stopListenToMove(id);
		};
	}, []);

	const cell = cube.fov.getCell(...position);

	return (
		<Tooltip
			active={cell.hasItem}
			content={<div style={{ whiteSpace: 'nowrap' }}>Взять предмет</div>}
		>
			{children}
		</Tooltip>
	);
};
