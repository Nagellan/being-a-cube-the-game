import React from 'react';

import { Map } from './components/Map';
import { Cube } from './components/Cube';
import { ActionTooltip } from './components/ActionTooltip';
import { GameProvider } from './providers/game';
import { Inventory } from './components/Inventory';

export const App = () => {
	return (
		<GameProvider>
			<div className="game">
				<Map />

				<ActionTooltip>
					<Cube />
				</ActionTooltip>

				<Inventory />
			</div>
		</GameProvider>
	);
};
