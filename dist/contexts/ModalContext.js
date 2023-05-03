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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
import { useModal } from '../hooks/useModal';
export var ModalContext = createContext(null);
export var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useModal(), isModalOpen = _b.isModalOpen, isModalClosed = _b.isModalClosed, isVisible = _b.isVisible, openModal = _b.openModal, closeModal = _b.closeModal, resetModal = _b.resetModal, handleClosePress = _b.handleClosePress;
    var contextValue = useMemo(function () { return ({
        isModalOpen: isModalOpen,
        isModalClosed: isModalClosed,
        isVisible: isVisible,
        openModal: openModal,
        closeModal: closeModal,
        resetModal: resetModal,
        handleClosePress: handleClosePress,
    }); }, [isModalOpen, isModalClosed, isVisible, openModal, closeModal, resetModal, handleClosePress]);
    return _jsx(ModalContext.Provider, __assign({ value: contextValue }, { children: children }));
};
export var useModalContext = function () {
    var context = useContext(ModalContext);
    if (context === null) {
        throw new Error('useModalContext needs to be used inside the ModalProvider');
    }
    return context;
};
