import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-row w-full mb-5 pt-3 bg-violet-400">
      <Link href={"/"} className="flex-1 text-center text-zinc-50">
        About us
      </Link>
      <Link href={"/download"} className="flex-1 text-center text-zinc-50">
        Download
      </Link>
    </nav>
  );
};

export default Nav;
