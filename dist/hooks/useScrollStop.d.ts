import type { RefObject } from 'react';
type BodyRef = {
    current: HTMLElement;
};
declare const useScrollStop: (shouldStop: boolean, ref?: BodyRef | RefObject<HTMLElement>) => void;
export { useScrollStop };
