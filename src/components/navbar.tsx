import { Link } from "react-router-dom";

import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed inset-0 h-14 px-4 flex items-center justify-between border-b">
      <Button variant="ghost" asChild>
        <Link to="/" className="text-xl">
          Phrase<span className="font-bold">Help</span>
        </Link>
      </Button>
    </nav>
  );
};
