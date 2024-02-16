import { SetsList } from "@/components/sets-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSets } from "@/hooks/use-sets";
import { Plus } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { sets, createSet } = useSets();

  function handleCreate() {
    if (name.length > 3) {
      createSet(name);
      setOpen(false);
      setName("");
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[400px] border rounded-md p-4 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">My Study Sets</h1>
          <Popover open={open} onOpenChange={() => setOpen((state) => !state)}>
            <PopoverTrigger asChild>
              <Button size="icon" variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex items-center gap-x-2">
                <Input
                  placeholder="your study set name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={handleCreate}>Create</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <SetsList sets={sets} />
      </div>
    </div>
  );
};

export default Home;
