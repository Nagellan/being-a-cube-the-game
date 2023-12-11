import React, { useMemo, useCallback, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useGame } from '../hooks/useGame';
import { useRerender } from '../hooks/useRerender';
import { GAME_EVENT } from '../constants/game';
import { ITEM } from '../constants/item';
import type { CellType } from '../types/cell';
import type { GameEvent } from '../types/game';
import type { Item } from '../types/item';
import type { Game } from '../entities/Game';

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

	const cell = useMemo(() => getCell(id), [getCell, id]);
	const visible = cube.fov.includes(cell.position);

	// ре-рендерим только клетки в области видимости Кубика и на 1 клетку дальше
	const getShouldRerender = useCallback(
		(event: GameEvent, game: Game) => {
			const _cell = game.map.getCellById(id);

			switch (event) {
				case GAME_EVENT.ACTION:
					return game.cube.hasPosition(_cell.position);
				case GAME_EVENT.MOVE:
					return (
						game.cube.fov.includes(_cell.position, 1) &&
						!game.cube.fov.includes(_cell.position, -1)
					);
				default:
					return false;
			}
		},
		[id],
	);

	useRerender(getShouldRerender);

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
