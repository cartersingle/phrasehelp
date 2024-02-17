import { useSets } from "@/hooks/use-sets";
import { SetsList } from "@/components/sets-list";
import { NamePopover } from "@/components/name-popover";
import { Plus } from "lucide-react";

const Home = () => {
  const { sets, createSet } = useSets();

  return (
    <div className="flex items-center justify-center">
      <div className="w-[400px] border rounded-md p-4 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">My Study Sets</h1>
          <NamePopover
            icon={Plus}
            placeholder="Study Set Name..."
            onSave={createSet}
            validator={(text) => text.length > 3}
          />
        </div>
        <SetsList sets={sets} />
      </div>
    </div>
  );
};

export default Home;
