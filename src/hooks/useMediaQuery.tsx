import { useState, useEffect } from "react";

type Props = {
  query: string;
};

function useMediaQuery({ query }: Props) {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
