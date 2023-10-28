import React, { forwardRef } from 'react';
import type { Ref } from 'react';

type Props = Record<string, never>;

export const Cube = forwardRef(function Cube(
	props: Props,
	ref: Ref<HTMLDivElement>,
) {
	return (
		<div className="cube" ref={ref}>
			👀
		</div>
	);
});
