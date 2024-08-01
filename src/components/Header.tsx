import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-secondary px-4 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img height={125} width={125} src="logoipsum-332.svg" alt="" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-secondary/90">
            Home
          </a>
          <a href="#" className="hover:text-secondary/90">
            About
          </a>
          <a href="#" className="hover:text-secondary/90">
            Services
          </a>
          <a href="#" className="hover:text-secondary/90">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-secondary hover:text-secondary/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
