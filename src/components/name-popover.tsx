import { LucideIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TProps {
  icon: LucideIcon;
  placeholder: string;
  onSave: (text: string) => void;
  validator?: (text: string) => boolean;
}

export const NamePopover = ({
  icon: Icon,
  placeholder,
  onSave,
  validator,
}: TProps) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  function handleSave() {
    if (validator) {
      if (!validator(text)) return;
    }
    onSave(text);
    setText("");
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={() => setOpen((state) => !state)}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <Icon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex items-center gap-x-2">
          <Input
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={handleSave}>Create</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
