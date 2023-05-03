var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModalContext } from './contexts/ModalContext';
import { useScrollStop } from './hooks/useScrollStop';
import styles from './style.module.css';
var Modal = function (_a) {
    var children = _a.children;
    var _b = useModalContext(), isModalOpen = _b.isModalOpen, isVisible = _b.isVisible, closeModal = _b.closeModal, handleClosePress = _b.handleClosePress;
    var containerRef = useRef(null);
    useScrollStop(isModalOpen);
    useEffect(function () {
        var _a;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    return createPortal(_jsxs("div", __assign({ role: "dialog", "aria-modal": true, className: styles.container }, { children: [_jsx("div", { className: "".concat(styles.backdrop, " ").concat(isVisible ? styles.openBackdrop : styles.closeBackdrop), onClick: closeModal }), _jsx("div", __assign({ ref: containerRef, className: "".concat(styles.content, " ").concat(isVisible ? styles.openModal : styles.closeModal), onKeyDown: handleClosePress, tabIndex: 0 }, { children: children }))] })), document.body);
};
export default Modal;
