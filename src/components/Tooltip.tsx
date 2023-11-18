import React, { useRef } from 'react';
import type { ReactNode, ReactElement, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Floater } from './Floater';

export const TIMEOUT = 100;

const TooltipContentWrapper = ({
	active,
	className,
	children,
}: PropsWithChildren<{ active: boolean; className?: string }>) => {
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
				className={`tooltip ${className ?? ''}`}
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
	className?: string;
	active?: boolean;
};

export const Tooltip = ({
	children,
	content,
	className,
	active = false,
}: Props) => {
	return (
		<Floater
			content={
				<TooltipContentWrapper active={active} className={className}>
					{content}
				</TooltipContentWrapper>
			}
			gap={4}
		>
			{children}
		</Floater>
	);
};
