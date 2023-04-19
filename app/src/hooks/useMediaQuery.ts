import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

// This code defines a custom React Hook called useMediaQuery, which accepts a media query string as its argument. The hook is used to determine whether the current screen resolution (or viewport size) of the user's browser matches the given media query or not. It returns a boolean value (matches) indicating whether the query matches the current screen resolution.

//Here's a breakdown of the code:

//useState(false): Initializes a state variable called matches with a default value of false. This state will be used to store the result of the media query.
//useEffect: The effect is run when the matches state or the query prop changes. The effect does the following:
// Calls window.matchMedia(query) to create a MediaQueryList object with the given media query.
// If the result of the media query (media.matches) is different from the current matches state, updates the matches state with the new value.
// Defines a listener function that updates the matches state with the result of the media query when the window is resized.
//d. Adds the listener function as an event listener for the "resize" event on the window.
//e. Returns a cleanup function that removes the event listener when the component is unmounted or when the effect runs again due to changes in dependencies.
//return matches: The hook returns the value of the matches state, indicating whether the media query matches the current screen resolution.
//
