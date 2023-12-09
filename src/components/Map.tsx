import React, { memo } from 'react';

import { useGame } from '../hooks/useGame';
import { useRerender } from '../hooks/useRerender';
import type { Position } from '../types/positioned';
import { GAME_EVENT } from '../constants/game';
import { Cell } from './Cell';

const RERENDER = [GAME_EVENT.MOVE];

const getStyle = ([x, y]: Position, size: number) => ({
	'--cube-position-x': x,
	'--cube-position-y': y,
	'--map-size': size,
});

const MapCells = memo(function MapCells() {
	const { map } = useGame();

	return (
		<>
			{map.data.map((row) =>
				row.map((cell) => {
					return <Cell key={cell.id} id={cell.id} />;
				}),
			)}
		</>
	);
});

export const Map = () => {
	const { map, cube } = useGame();

	useRerender(RERENDER);

	return (
		<div className="map" style={getStyle(cube.position, map.size)}>
			<MapCells />
		</div>
	);
};
