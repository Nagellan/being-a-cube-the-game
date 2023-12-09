import React from 'react';
import type { ReactElement } from 'react';

import { useGame } from '../hooks/useGame';
import { useRerender } from '../hooks/useRerender';
import { useDebounce } from '../hooks/useDebounce';
import { GAME_EVENT } from '../constants/game';
import { Tooltip, TIMEOUT } from './Tooltip';
import { Cell } from './Cell';

const RERENDER = [GAME_EVENT.MOVE, GAME_EVENT.ACTION];

type Props = {
	children: ReactElement;
};

export const ActionTooltip = ({ children }: Props) => {
	const { cube } = useGame();

	useRerender(RERENDER);

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
