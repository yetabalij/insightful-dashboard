import React from "react";
import Logo from "@/img/insightfulwords1.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
      <Link href="/">
        <Image src={Logo} alt="logo" width={60} />
      </Link>
    </div>
  );
};

export default Navbar;
