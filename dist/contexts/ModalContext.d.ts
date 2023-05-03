import type { KeyboardEvent, PropsWithChildren } from 'react';
interface ModalContextProps {
    isModalOpen: boolean;
    isModalClosed: boolean;
    isVisible: boolean;
    openModal: () => void;
    closeModal: () => void;
    resetModal: () => void;
    handleClosePress: (event: KeyboardEvent<HTMLElement>) => void;
}
export declare const ModalContext: import("react").Context<ModalContextProps | null>;
export declare const ModalProvider: ({ children }: PropsWithChildren) => JSX.Element;
export declare const useModalContext: () => ModalContextProps;
export {};
