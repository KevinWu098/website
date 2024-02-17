"use client";

import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

import { cn } from "./utils";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 700) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div
            className={cn(
                "group fixed bottom-6 right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full px-3 transition-all duration-300",
                isVisible ? "visible hover:w-40" : "invisible opacity-0",
            )}
            onClick={scrollToTop}
        >
            <div className="flex items-center justify-center">
                <FaChevronUp className="text-primary" />
                <span className="hidden px-2 group-hover:inline-flex">
                    <p className="line-clamp-1 overflow-hidden truncate text-clip font-medium tracking-wide text-slate-300">
                        Back to top
                    </p>
                </span>
            </div>
        </div>
    );
};

export default ScrollToTop;
