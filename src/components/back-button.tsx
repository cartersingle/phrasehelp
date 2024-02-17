import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";

export const BackButton = ({ to }: { to: string }) => {
  return (
    <div className="flex mb-1">
      <Button variant="ghost" size="sm" asChild>
        <Link to={to}>
          <MoveLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
      </Button>
    </div>
  );
};
