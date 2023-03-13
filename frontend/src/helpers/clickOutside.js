import { useEffect } from "react";

export default function useClickOutside(ref, fun) {
  useEffect(() => {                                             // runs when second arg is manipulated (ref)
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {     // when its not the current ref or if event target is in ref
        return;                                                 // stop and return nothing
      }
      fun();                                                    // f got this far run fun()
    };
    document.addEventListener("mousedown", listener);           // on pg wait for a mousedown and then run the listener function
    document.addEventListener("touchstart", listener);          // on pg wait for a mouseup and then run the listener function

    return () => {                                              // export a function that conatins...
                                                                // removing the past listeners
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}
