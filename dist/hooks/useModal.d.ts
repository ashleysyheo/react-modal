import type { KeyboardEvent } from 'react';
declare const useModal: () => {
    isModalOpen: boolean;
    isModalClosed: boolean;
    isVisible: boolean;
    openModal: () => void;
    closeModal: () => void;
    resetModal: () => void;
    handleClosePress: (event: KeyboardEvent<HTMLElement>) => void;
};
export { useModal };
