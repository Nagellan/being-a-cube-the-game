import React from 'react';
import type { ReactElement } from 'react';

import { useGame } from '../hooks/useGame';
import { useDebounce } from '../hooks/useDebounce';
import { Tooltip, TIMEOUT } from './Tooltip';
import { Cell } from './Cell';

type Props = {
	children: ReactElement;
};

export const ActionTooltip = ({ children }: Props) => {
	const { cube } = useGame();

	const cell = cube.fov.getCell(...cube.position);
	// условие с hasItem нужно для того, чтобы дебаунс работал только на уход с клетки с предметом
	const cubeCellId = useDebounce(cell.id, cell.hasItem ? 0 : TIMEOUT);

	return (
		<Tooltip
			active={cell.hasItem}
			className="action-tooltip"
			content={
				<>
					Нажми&nbsp;<div className="__press-key">F</div>&nbsp;и
					возьми&nbsp;
					<Cell id={cubeCellId} />
				</>
			}
		>
			{children}
		</Tooltip>
	);
};
