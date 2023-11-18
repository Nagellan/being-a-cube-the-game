import React from 'react';

import { useGame } from '../hooks/useGame';
import { Cell } from './Cell';
import type { Position } from '../types/positioned';

const getStyle = ([x, y]: Position, size: number) => ({
	'--cube-position-x': x,
	'--cube-position-y': y,
	'--map-size': size,
});

export const Map = () => {
	const { map, cube } = useGame();

	return (
		<div className="map" style={getStyle(cube.position, map.size)}>
			{map.data.map((row) =>
				row.map((cell) => {
					return <Cell key={cell.id} id={cell.id} />;
				}),
			)}
		</div>
	);
};
