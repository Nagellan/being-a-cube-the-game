import type { RefCallback, MutableRefObject } from 'react';

type MutableRef<T> = RefCallback<T> | MutableRefObject<T> | null;

export const mergeRefs = (refs: MutableRef<unknown>[] = [], value: unknown) => {
	refs.forEach((ref) => {
		if (typeof ref === 'function') {
			ref(value);
		} else if (typeof ref === 'object' && ref != null) {
			ref.current = value;
		}
	});
};
