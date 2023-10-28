import React, { useState, useRef, cloneElement } from 'react';
import type { ReactNode, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const TIMEOUT = 100;

type Props = {
	children: ReactElement;
	content: ReactNode;
	active?: boolean;
};

export const Tooltip = ({ children, content, active = false }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [node, setNode] = useState<HTMLElement | null>(null);

	return (
		<>
			{cloneElement(children, { ref: setNode })}
			{node !== null &&
				createPortal(
					<CSSTransition
						in={active}
						nodeRef={ref}
						timeout={TIMEOUT}
						classNames="tooltip-"
						mountOnEnter
						unmountOnExit
					>
						<div
							ref={ref}
							className="tooltip"
							style={{ '--delay': `${TIMEOUT}ms` }}
						>
							{content}
						</div>
					</CSSTransition>,
					node,
				)}
		</>
	);
};
