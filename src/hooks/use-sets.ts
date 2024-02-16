import { useLocalStorage } from "usehooks-ts";
import { nanoid } from "nanoid";

import { TSet } from "@/types/set";

export const useSets = () => {
  const [sets, setSets] = useLocalStorage<TSet[]>("phrasehelp-sets", []);

  function createSet(name: string) {
    setSets([...sets, { name, id: nanoid(), phrases: [] }]);
  }

  return { sets, createSet };
};
