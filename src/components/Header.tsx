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
                    "wrapper top-0 fixed flex-between inset-x-0 z-30 h-24 w-full bg-transparent font-bold text-lg",
                    showNav ? "flex" : "opacity-0 pointer-events-none",
                    "transition-all duration-500",
                )}
            >
                <div>
                    {/* <ThemeToggle /> */}
                    <Link href="#hero">
                        <p
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            @kevinwu098
                        </p>
                    </Link>
                </div>

                <ul className="flex space-x-10">
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
            </nav>
        </>
    );
};

export default Header;
