import React from 'react';
import type { ReactElement } from 'react';

import { useGame } from '../hooks/useGame';
import { Tooltip } from './Tooltip';

type Props = {
	children: ReactElement;
};

export const ActionTooltip = ({ children }: Props) => {
	const { cube } = useGame();

	const cell = cube.fov.getCell(...cube.position);

	return (
		<Tooltip
			active={cell.hasItem}
			content={<div style={{ whiteSpace: 'nowrap' }}>Взять предмет</div>}
		>
			{children}
		</Tooltip>
	);
};
