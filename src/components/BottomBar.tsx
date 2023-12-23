import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useGame } from '../hooks/useGame';
import { useRerender } from '../hooks/useRerender';
import { GAME_EVENT } from '../constants/game';
// import { Crafting } from './Crafting';
import { Inventory } from './Inventory';

const TIMEOUT = 150;
const RERENDER = [GAME_EVENT.ACTION];

export const BottomBar = () => {
	const nodeRef = useRef<HTMLDivElement>(null);

	const { cube } = useGame();
	const { size } = cube.inventory;

	useRerender(RERENDER);

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
				{/* <Crafting /> */}

				<Inventory />
			</div>
		</CSSTransition>
	);
};
