import { useCallback, useState, useEffect, useRef } from "react";

(async () => {
  if ("ResizeObserver" in window === false) {
    // Loads polyfill asynchronously, only if required.
    const module = await import("@juggle/resize-observer");
    window.ResizeObserver = module.ResizeObserver;
  }
})();

// const observerOptions = {
//   box: "border-box",
// };

function useMeasure(shouldMeasure) {
  const [contentRect, setContentRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  const [nodeMeasured, setNodeMeasured] = useState(false);
  const [nodeRef, setNodeRef] = useState(null);

  const rafId = useRef(null);
  const ro = useRef(null);

  const setNodeRefCb = useCallback((node) => {
    if (node) {
      setNodeRef(node);
    }
  }, []);

  useEffect(() => {
    function measure([entry]) {
      rafId.current = window.requestAnimationFrame(() => {
        setContentRect(entry.contentRect);
        setNodeMeasured(true);
      });
    }

    if (nodeRef && shouldMeasure) {
      ro.current = new ResizeObserver(measure);
      ro.current.observe(nodeRef);
    }

    return () => {
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }

      if (ro.current) {
        ro.current.disconnect();
      }
    };
  }, [nodeMeasured, nodeRef, shouldMeasure]);

  return [setNodeRefCb, contentRect, nodeMeasured];
}

export default useMeasure;
