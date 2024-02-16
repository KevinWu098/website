"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
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
                    "wrapper top-0 fixed flex-between inset-x-0 z-30 h-24 w-full bg-transparent",
                    showNav ? "flex" : "opacity-0 pointer-events-none",
                    "transition-all duration-500",
                )}
            >
                <div>{/* <ThemeToggle /> */}</div>

                <ul className="flex space-x-10 font-bold text-lg">
                    <li
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        about
                    </li>
                    <li
                        data-aos="fade-down"
                        data-aos-duration="1200"
                        data-aos-once="true"
                    >
                        portfolio
                    </li>
                    <li
                        data-aos="fade-down"
                        data-aos-duration="1400"
                        data-aos-once="true"
                    >
                        contact
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
