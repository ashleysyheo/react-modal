import { useCallback, useState } from 'react';
var useModal = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useState(false), isClosed = _b[0], setIsClosed = _b[1];
    var _c = useState(false), isVisible = _c[0], setIsVisible = _c[1];
    var open = useCallback(function () {
        setIsOpen(true);
        setIsVisible(true);
    }, []);
    var close = useCallback(function () {
        setIsVisible(false);
        setTimeout(function () {
            setIsOpen(false);
            setIsClosed(true);
        }, 600);
    }, []);
    var reset = useCallback(function () {
        setIsClosed(false);
    }, []);
    var handleClosePress = useCallback(function (event) {
        if (event.key === 'Escape') {
            close();
        }
    }, [close]);
    return {
        isModalOpen: isOpen,
        isModalClosed: isClosed,
        isVisible: isVisible,
        openModal: open,
        closeModal: close,
        resetModal: reset,
        handleClosePress: handleClosePress,
    };
};
export { useModal };
