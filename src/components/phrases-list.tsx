import { TPhrase } from "@/types/set";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const PhrasesList = ({ phrases }: { phrases: TPhrase[] }) => {
  return (
    <ul className="space-y-2">
      {phrases.map((phrase) => {
        return (
          <li key={phrase.id} className="border rounded-md p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium">{phrase.name}</p>
              <Button size="sm" variant="outline" asChild>
                <Link to={`./phrase/${phrase.id}`}>Edit</Link>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              {phrase.text || <span className="italic">None</span>}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
