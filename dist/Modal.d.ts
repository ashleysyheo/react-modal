import type { ComponentPropsWithoutRef, ReactNode } from 'react';
interface ModalProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}
declare const Modal: ({ children }: ModalProps) => any;
export default Modal;
