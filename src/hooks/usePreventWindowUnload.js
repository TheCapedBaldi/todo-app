import { useEffect } from "react";

/**
 * custom hook to run before page unload
 * credit: https://angelos.dev/2019/05/custom-react-hook-to-prevent-window-unload/
 * @param {*} deps - dependencies injected to useEffect
 * @param {*} handleBeforeUnload - func. to run before page unloads
 */

export const usePreventWindowUnload = (deps, handleBeforeUnload) => {
  useEffect(() => {
    // the first element of deps is to check if browser is allowed to unload
    if (!deps[0]) return;
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, deps);
};
