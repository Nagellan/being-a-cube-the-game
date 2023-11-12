import React, { useRef } from 'react';
import type { ReactNode, ReactElement, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Floater } from './Floater';

const TIMEOUT = 100;

const TooltipContentWrapper = ({
	active,
	children,
}: PropsWithChildren<{ active: boolean }>) => {
	const ref = useRef<HTMLDivElement>(null);

	return (
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
				{children}
			</div>
		</CSSTransition>
	);
};

type Props = {
	children: ReactElement;
	content: ReactNode;
	active?: boolean;
};

export const Tooltip = ({ children, content, active = false }: Props) => {
	return (
		<Floater
			content={
				<TooltipContentWrapper active={active}>
					{content}
				</TooltipContentWrapper>
			}
		>
			{children}
		</Floater>
	);
};
