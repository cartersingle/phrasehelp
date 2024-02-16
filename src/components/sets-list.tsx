import { TSet } from "@/types/set";
import { useState } from "react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export const SetsList = ({ sets }: { sets: TSet[] }) => {
  const [search, setSearch] = useState("");

  const filteredSets = sets.filter((set) =>
    set.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="mb-2"
      />
      <ul className="space-y-2">
        {filteredSets.map((set) => {
          return (
            <li
              key={set.id}
              className="p-2 rounded-md hover:bg-secondary group transition"
            >
              <Link
                to={`/set/${set.id}`}
                className="flex items-center justify-between"
              >
                <p className="truncate">{set.name}</p>
                <MoveRight className="h-4 w-4 group-hover:translate-x-2 transition-all mr-2 shrink-0" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
