"use client";

import { AlignJustify, XIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MainMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);
  return (
    <div>
      {isDesktop ? (
        <nav className="text-coolGray text-xl font-normal font-inter">
          <ul className="flex justify-between items-center gap-12">
            <li>
              <Link href="https://www.crework.in/30daysofpm">
                30 Days of PM
              </Link>
            </li>
            <li>
              <Link href="https://www.crework.in/newsletter">Newsletter</Link>
            </li>
            <li>
              <Link href="https://www.crework.in/builders">
                Builders Cohort
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <button aria-label={isOpen ? "Close Menu" : "Open Menu"} type="button">
          {isOpen ? (
            <XIcon
              onClick={() => setIsOpen(false)}
              size={28}
              className="text-white"
            />
          ) : (
            <AlignJustify
              size={24}
              className="text-white"
              onClick={() => setIsOpen(true)}
            />
          )}
        </button>
      )}
      <nav
        ref={menuRef}
        className={cn(
          "absolute  inset-x-0 bg-blackGray text-white text-xl transition-all duration-300 pb-12",
          isOpen ? "top-28 opacity-100" : "-top-32 opacity-0",
          isDesktop && "hidden"
        )}
      >
        <ul className="flex flex-col justify-center items-center gap-6">
          <li>
            <Link href="#">30 Days of PM</Link>
          </li>
          <li>
            <Link href="#">Newsletter</Link>
          </li>
          <li>
            <Link href="#">Builders Cohort</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
