import React, {
	useRef,
	useState,
	useEffect,
	useCallback,
	cloneElement,
} from 'react';
import type { PropsWithChildren, ReactNode, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { mergeRefs } from '../utils/react';

type AnchorPositionData = {
	top: number;
	left: number;
	width: number;
	gap?: number;
};

const FloaterContent = ({
	children,
	top: anchorTop,
	left: anchorLeft,
	width: anchorWidth,
	gap = 0,
}: PropsWithChildren<AnchorPositionData>) => {
	const [size, setSize] = useState<{ height: number; width: number } | null>(
		null,
	);

	const resizeObserver = useRef<ResizeObserver>(
		new ResizeObserver(([entry]) => {
			setSize({
				height: entry.contentRect.height,
				width: entry.contentRect.width,
			});
		}),
	);

	const onRef = useCallback((node: HTMLDivElement | null) => {
		if (node) {
			resizeObserver.current.observe(node);
		} else {
			resizeObserver.current.disconnect();
		}
	}, []);

	useEffect(() => {
		return () => {
			resizeObserver.current.disconnect();
		};
	}, []);

	return (
		<div
			className="floater"
			style={
				size
					? {
							'--anchor-top': `${anchorTop}px`,
							'--anchor-left': `${anchorLeft}px`,
							'--anchor-width': `${anchorWidth}px`,
							'--floater-height': `${size.height}px`,
							'--floater-width': `${size.width}px`,
							'--floater-gap': `${gap}px`,
					  }
					: {}
			}
			ref={onRef}
		>
			{children}
		</div>
	);
};

type Props = {
	children: ReactElement;
	content?: ReactNode;
};

/**
 * Важно! Для работы компонента необходимо,
 * чтобы у children был использован forwardRef!
 */
export const Floater = ({ children, content }: Props) => {
	const [anchorPositionData, setAnchorPositionData] =
		useState<AnchorPositionData | null>(null);

	const anchorRef = useRef<HTMLElement | null>(null);
	const resizeObserver = useRef<ResizeObserver>(
		new ResizeObserver(([entry]) => {
			const { top, left, width } = entry.target.getBoundingClientRect();

			setAnchorPositionData({ top, left, width });
		}),
	);

	const onAnchorChange = useCallback(() => {
		if (!anchorRef.current) return;

		const { top, left, width } = anchorRef.current.getBoundingClientRect();

		setAnchorPositionData({ top, left, width });
	}, []);

	const onRef = useCallback(
		(node: HTMLElement | null) => {
			mergeRefs([anchorRef, children.props.ref], node);

			onAnchorChange();

			if (node) {
				resizeObserver.current.observe(node);
			} else {
				resizeObserver.current.disconnect();
			}
		},
		[children.props.ref],
	);

	useEffect(() => {
		window.addEventListener('scroll', onAnchorChange);
		window.addEventListener('resize', onAnchorChange);

		return () => {
			window.removeEventListener('scroll', onAnchorChange);
			window.removeEventListener('resize', onAnchorChange);
		};
	});

	return (
		<>
			{cloneElement(children, {
				ref: onRef,
			})}
			{anchorPositionData &&
				createPortal(
					<FloaterContent {...anchorPositionData}>
						{content}
					</FloaterContent>,
					document.body,
				)}
		</>
	);
};
