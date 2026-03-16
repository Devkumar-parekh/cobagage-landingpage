import Link from "next/link";
import React from "react";

const LOGO = "./File_img/CobagageLogo 1.png";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" aria-label="Cobagage home" className="block w-28">
            <img src={LOGO} alt="Cobagage" className="w-full h-auto" />
          </a>
        </div>


        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/#">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#faqs">FAQs</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div className="flex gap-4">
          <button className="flex justify-center text-nowrap items-center px-[13px] py-[1px] w-[68px] h-[36px] bg-white border border-gray-300 rounded-full">
            Login
          </button>
          <button className="flex justify-center items-center text-nowrap px-[13px] py-[1px] w-[68px] h-[36px] bg-[#DB5928] text-white border border-[#DB5928] rounded-full hover:opacity-90">
            Sing Up
          </button>
        </div>
      </div>
    </header>
  );
}
