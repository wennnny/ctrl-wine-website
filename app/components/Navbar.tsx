"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06110d]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="/" className="text-lg font-semibold tracking-wide">
                    Ctrl + Wine
                </a>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 text-sm text-[#c8bfae] md:flex">
                    <a href="#about" className="hover:text-white">
                        關於 About
                    </a>
                    <a href="/winemenu" className="hover:text-white">
                        酒單 Wine
                    </a>
                    <a href="#menu" className="hover:text-white">
                        菜單 Menu
                    </a>
                    <a href="#events" className="hover:text-white">
                        活動 Events
                    </a>
                    <a href="#collab" className="hover:text-white">
                        合作 Collaboration
                    </a>
                    <a href="#contact" className="hover:text-white">
                        聯絡 Contact
                    </a>
                </div>

                {/* Desktop Button */}
                <a
                    href="#contact"
                    className="hidden rounded-full border border-[#7b1e2b] px-4 py-2 text-sm text-[#f5f0e6] hover:bg-[#7b1e2b] md:block"
                >
                    預約 Book Now
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="flex flex-col gap-1 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="h-[2px] w-6 bg-white"></span>
                    <span className="h-[2px] w-6 bg-white"></span>
                    <span className="h-[2px] w-6 bg-white"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-white/10 bg-[#06110d] px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-6 text-lg text-[#f5f0e6]">
                        <a href="#about">關於 About</a>
                        <a href="/winemenu">酒單 Wine</a>
                        <a href="/menu">菜單 Menu</a>
                        <a href="#events">活動 Events</a>
                        <a href="#collab">合作 Collaboration</a>
                        <a href="#contact">聯絡 Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}