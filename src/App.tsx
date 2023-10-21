import React from 'react';

import { Map } from './components/Map';
import { Cube } from './components/Cube';
import { GameProvider } from './providers/game';

export const App = () => {
	return (
		<GameProvider>
			<div className="game">
				<Map />
				<Cube />
			</div>
		</GameProvider>
	);
};
