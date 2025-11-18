"use client";

import { Input } from "@/components/ui/input";
import { FileSearch2, SearchIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Search Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Open Search"
      >
        <SearchIcon className="w-5 h-5 text-gray-500" />
      </button>

      {/* Popup */}
      {open && (
        <div
          ref={popupRef}
          className="absolute right-0 mt-2 w-[90vw] max-w-md sm:w-80 bg-white border border-gray-200 rounded-xl shadow-lg p-4 animate-fadeIn z-50"
        >
          <span className="text-sm font-medium text-gray-700 mb-2 block">
            Search
          </span>

          <div className="relative">
            <Input
              placeholder="Type to search..."
              className="pr-10"
            />
            <span className="absolute inset-y-0 right-2 flex items-center">
              <button
                type="button"
                aria-label="Submit"
                className="rounded-full p-1.5 text-gray-700 hover:bg-gray-100 transition"
              >
                <FileSearch2 className="w-5 h-5" />
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
