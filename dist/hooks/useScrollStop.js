import { useEffect } from 'react';
var useScrollStop = function (shouldStop, ref) {
    if (ref === void 0) { ref = { current: document.body }; }
    useEffect(function () {
        var node = ref.current;
        if (node)
            node.classList.add('hide-overflow');
        return function () {
            if (node)
                node.classList.remove('hide-overflow');
        };
    }, [ref, shouldStop]);
};
export { useScrollStop };
