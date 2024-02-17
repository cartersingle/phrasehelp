import { BackButton } from "@/components/back-button";
import { Container } from "@/components/container";
import { NamePopover } from "@/components/name-popover";
import { PhrasesList } from "@/components/phrases-list";
import { Button } from "@/components/ui/button";
import { useSet } from "@/hooks/use-set";
import { Plus } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

const Set = () => {
  const { setId } = useParams();

  const { set, createPhrase } = useSet(setId);

  if (!set) return <Navigate to="/" />;

  const isDisabled = !set.phrases.some((p) => p.text);

  return (
    <Container>
      <BackButton to={`/`} />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-lg font-semibold">{set.name}</h1>
        <div className="flex items-center gap-x-2">
          <Button disabled={isDisabled}>Study</Button>
          <NamePopover
            icon={Plus}
            placeholder="Phrase Name..."
            onSave={createPhrase}
            validator={(name) => name.length > 3}
          />
        </div>
      </div>
      <PhrasesList phrases={set.phrases} />
    </Container>
  );
};

export default Set;
