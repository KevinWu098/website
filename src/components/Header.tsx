"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
    const [showNav, setShowNav] = useState(true);
    const [scrollPos, setScrollPos] = useState<number>(0);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setScrollPos(currentScrollPos);

            const scrollingUp = prevScrollPos > currentScrollPos;

            setShowNav(scrollingUp);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "top-0 fixed inset-x-0 z-30 h-24 w-full max-w-[100vw] flex bg-transparent font-bold text-lg",
                    showNav || scrollPos <= 96 ? null : "opacity-0 pointer-events-none",
                    "transition-all duration-500",
                    scrollPos > 96
                        ? "bg-[#191919] w-[100vw] bg-opacity-50"
                        : null,
                )}
            >
                <div className={cn("wrapper")}>
                    <div className="flex-between h-full px-8 md:px-0">
                        <div>
                            {/* <ThemeToggle /> */}
                            <Link href="#hero">
                                <div
                                    className="flex"
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-once="true"
                                >
                                    @
                                    <p className="hidden md:flex">kevinwu098</p>
                                </div>
                            </Link>
                        </div>
                        <ul className="flex space-x-5 md:space-x-10">
                            {/* <li
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-once="true"
                            >
                                about
                            </li> */}
                            <Link href="#portfolio">
                                <li
                                    data-aos="fade-down"
                                    data-aos-duration="1200"
                                    data-aos-once="true"
                                >
                                    portfolio
                                </li>
                            </Link>
                            <Link href="#contact">
                                <li
                                    data-aos="fade-down"
                                    data-aos-duration="1400"
                                    data-aos-once="true"
                                >
                                    contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
