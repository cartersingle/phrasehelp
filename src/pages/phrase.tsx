import { BackButton } from "@/components/back-button";
import { Container } from "@/components/container";
import { NamePopover } from "@/components/name-popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePhrase } from "@/hooks/use-phrase";
import { Pencil } from "lucide-react";
import { FormEvent, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";

const Phrase = () => {
  const { setId, phraseId } = useParams();
  const navigate = useNavigate();

  const { phrase, updatePhrase } = usePhrase(setId, phraseId);

  const [phraseText, setPhraseText] = useState(phrase?.text || "");

  if (!phrase) return <Navigate to="/" />;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updatePhrase({ text: phraseText });
    navigate(`/set/${setId}`);
  }

  return (
    <Container>
      <BackButton to={`/set/${setId}`} />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-lg font-semibold">{phrase.name}</h1>
        <NamePopover
          icon={Pencil}
          button={"Rename"}
          defaultText={phrase.name}
          resetToNew
          placeholder="Rename Phrase"
          onSave={(newName) => updatePhrase({ name: newName })}
          validator={(name) => name.length > 3}
        />
      </div>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <Label>Phrase</Label>
        <Textarea
          rows={10}
          value={phraseText}
          onChange={(e) => setPhraseText(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          This will be the phrase that you wish to learn. New lines will be
          saved when studying.
        </p>
        <div className="flex justify-end">
          <Button className="mt-2">Save</Button>
        </div>
      </form>
    </Container>
  );
};

export default Phrase;
