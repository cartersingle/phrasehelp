import { TSet } from "@/types/set";
import { nanoid } from "nanoid";
import { useLocalStorage } from "usehooks-ts";

export const useSet = (id?: string) => {
  const [sets, setSets] = useLocalStorage<TSet[]>("phrasehelp-sets", []);

  const set = sets.find((s) => s.id === id);

  const setsWithoutCurr = sets.filter((s) => s.id !== id);

  function createPhrase(name: string) {
    if (!set) return;
    setSets([
      ...setsWithoutCurr,
      { ...set, phrases: [...set.phrases, { id: nanoid(), name }] },
    ]);
  }

  return { set, createPhrase };
};
