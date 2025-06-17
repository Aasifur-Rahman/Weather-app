import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMyLocation, MdWbSunny } from "react-icons/md";
import SearchBar from "./SearchBar";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50">
      <div className="h-[80px] w-full flex justify-between items-center max-w7xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather </h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </p>

        {/* location section */}
        <section className="flex gap-2 items-center">
          <MdMyLocation className="text-2xl text-gray-500 hover:opacity-80 cursor-pointer" />
          <FaLocationDot className="text-3xl text-gray-600 hover:opacity-80 cursor-pointer" />
          <p className="text-slate-900/80 text-sm">Bangladesh</p>
          <div>
            {/* search bar */}
            <SearchBar />
          </div>
        </section>
      </div>
      Navbar
    </nav>
  );
}
