import React from "react";
import { useState } from "react";
import { Search, X } from "lucide-react";

export const Searchbar = ({ placeholder, searchOpen, toggleSearch }) => {
  
  return (
    <>
      <button
        className={
          "btn md:hidden mr-2.5 " + (searchOpen ? "hidden" : "")
        }
        onClick={toggleSearch}
      >
        <Search size={20} />
      </button>
      <label
        className={
          "input mx-2.5 md:flex focus:outline-none focus-within:outline-none " + (searchOpen ? "flex w-60" : "hidden")
        }
      >
        <Search size={20} className="hidden md:inline text-base-content" />
        <X size={20} className="md:hidden" onClick={toggleSearch} />
        <input type="search" className="text-base-content" required placeholder={placeholder} />
      </label>
    </>
  );
};
