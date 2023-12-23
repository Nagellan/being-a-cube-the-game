import React, { useRef, useState, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';

import type { GameEventListener } from '../types/game';
import { useGame } from '../hooks/useGame';
import { useRerender } from '../hooks/useRerender';
import { useEvent } from '../hooks/useEvent';
import { GAME_EVENT } from '../constants/game';
import { Crafting } from './Crafting';
import { Inventory } from './Inventory';

const TIMEOUT = 150;
const RERENDER = [GAME_EVENT.ACTION];

export const BottomBar = () => {
	const [isCraftingOpen, setIsCraftingOpen] = useState<boolean>(false);

	const nodeRef = useRef<HTMLDivElement>(null);

	const { cube } = useGame();
	const { size } = cube.inventory;

	useRerender(RERENDER);

	const listener = useCallback<GameEventListener>(
		({ event }) => {
			if (size === 0) {
				return;
			}

			switch (event) {
				case GAME_EVENT.TOGGLE_CRAFTING:
					setIsCraftingOpen((prevIsOpen) => !prevIsOpen);
					break;

				default:
					break;
			}
		},
		[size],
	);
	useEvent(listener);

	return (
		<CSSTransition
			in={size > 0}
			nodeRef={nodeRef}
			timeout={TIMEOUT}
			classNames="bottom-bar-"
			mountOnEnter
			unmountOnExit
		>
			<div
				ref={nodeRef}
				className="bottom-bar"
				style={{ '--delay': `${TIMEOUT}ms` }}
			>
				{isCraftingOpen && (
					<>
						<Crafting />
						<hr />
					</>
				)}

				<Inventory />
			</div>
		</CSSTransition>
	);
};
