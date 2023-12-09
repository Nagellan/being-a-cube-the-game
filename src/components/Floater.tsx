import React, {
	useRef,
	useMemo,
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
};

type FloaterContentWrapperProps = PropsWithChildren<
	AnchorPositionData & { gap?: number }
>;

const FloaterContentWrapper = ({
	children,
	top: anchorTop,
	left: anchorLeft,
	width: anchorWidth,
	gap = 0,
}: FloaterContentWrapperProps) => {
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

	const setRef = useCallback((node: HTMLDivElement | null) => {
		if (node) {
			resizeObserver.current.observe(node);
		} else {
			resizeObserver.current.disconnect();
		}
	}, []);

	const style = useMemo(() => {
		if (size) {
			return {
				'--anchor-top': `${anchorTop}px`,
				'--anchor-left': `${anchorLeft}px`,
				'--anchor-width': `${anchorWidth}px`,
				'--floater-height': `${size.height}px`,
				'--floater-width': `${size.width}px`,
				'--floater-gap': `${gap}px`,
			};
		}

		return undefined;
	}, [size, anchorTop, anchorLeft, anchorWidth, gap]);

	return (
		<div className="floater" style={style} ref={setRef}>
			{children}
		</div>
	);
};

type Props = {
	children: ReactElement;
	content?: ReactNode;
	gap?: number;
};

/**
 * Важно! Для работы компонента необходимо,
 * чтобы у children был использован forwardRef!
 */
export const Floater = ({ children, content, gap = 0 }: Props) => {
	const [anchorPositionData, setAnchorPositionData] =
		useState<AnchorPositionData | null>(null);

	const anchorRef = useRef<HTMLElement | null>(null);
	// обновляем позицию флоатера при изменении размеров якоря
	const resizeObserver = useRef<ResizeObserver>(
		new ResizeObserver(([entry]) => {
			const { top, left, width } = entry.target.getBoundingClientRect();

			setAnchorPositionData({ top, left, width });
		}),
	);

	const updatePosition = useCallback(() => {
		if (!anchorRef.current) return;

		const { top, left, width } = anchorRef.current.getBoundingClientRect();

		setAnchorPositionData({ top, left, width });
	}, []);

	const setAnchorRef = useCallback(
		(node: HTMLElement | null) => {
			mergeRefs([anchorRef, children.props.ref], node);

			updatePosition();

			if (node) {
				resizeObserver.current.observe(node);
			} else {
				resizeObserver.current.disconnect();
			}
		},
		[children.props.ref, updatePosition],
	);

	useEffect(() => {
		window.addEventListener('scroll', updatePosition);
		window.addEventListener('resize', updatePosition);

		return () => {
			window.removeEventListener('scroll', updatePosition);
			window.removeEventListener('resize', updatePosition);
		};
	});

	return (
		<>
			{cloneElement(children, { ref: setAnchorRef })}
			{anchorPositionData &&
				createPortal(
					<FloaterContentWrapper {...anchorPositionData} gap={gap}>
						{content}
					</FloaterContentWrapper>,
					document.body,
				)}
		</>
	);
};
