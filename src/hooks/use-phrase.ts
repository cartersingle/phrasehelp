import { useLocalStorage } from "usehooks-ts";
import { TSet } from "@/types/set";

export const usePhrase = (setId?: string, phraseId?: string) => {
  const [sets, setSets] = useLocalStorage<TSet[]>("phrasehelp-sets", []);

  const set = sets.find((s) => s.id === setId);
  const phrase = set?.phrases.find((p) => p.id === phraseId);

  const setsWithoutCurr = sets.filter((s) => s.id !== setId);
  const phrasesWihtoutCurr = set?.phrases.filter((p) => p.id !== phraseId);

  function updatePhrase({ name, text }: { name?: string; text?: string }) {
    if (!set || !phrase || !phrasesWihtoutCurr) return;

    setSets([
      ...setsWithoutCurr,
      {
        ...set,
        phrases: [
          ...phrasesWihtoutCurr,
          {
            id: phrase.id,
            name: name || phrase.name,
            text: text || phrase.text,
          },
        ],
      },
    ]);
  }

  return { phrase, updatePhrase };
};
