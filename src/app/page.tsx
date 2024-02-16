"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import { cn } from "@/lib/utils";
import { Github, GlobeIcon } from "lucide-react";

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        title: "Agentic",
        description: "An accessibility tool, powered by AI large action model",
        image: "/gray.svg",
    },
    {
        id: 2,
        title: "Agentic",
        description: "An accessibility tool, powered by AI large action model",
        image: "/gray.svg",
    },
    {
        id: 3,
        title: "Agentic",
        description:
            "An accessibility tool, powered by an AI large action model",
        image: "/portfolio/antalmanac.png",
        github: "https://github.com/icssc/antalmanac",
        site: "https://antalmanac.com",
    },
    {
        id: 4,
        title: "AntAlmanac",
        description: "Open-source course planner for UCI students",
        image: "/portfolio/antalmanac_light.png",
        github: "https://github.com/icssc/antalmanac",
        site: "https://antalmanac.com",
    },
];

export default function Home() {
    const [hovered, setHovered] = useState<boolean[]>(() =>
        Array(PORTFOLIO_ITEMS.length).fill(false),
    );

    const handleHover = (index: number) => {
        setHovered((prevHovered) => prevHovered.map((_, i) => i === index));
    };

    const handleUnhover = () => {
        setHovered(Array(PORTFOLIO_ITEMS.length).fill(false));
    };

    return (
        <main className="min-h-screen">
            <Hero />

            <div className="min-h-screen bg-[#242424]">
                <div className="wrapper py-32 flex-center flex-col">
                    <h2 className="text-7xl font-bold text-primary">
                        portfolio
                    </h2>
                    <div className="grid grid-cols-2 gap-8 mt-12">
                        {PORTFOLIO_ITEMS.map((item, index) => (
                            <div
                                className="overflow-hidden grid"
                                key={item.id}
                                onMouseOver={() => handleHover(index)}
                                onMouseOut={() => handleUnhover()}
                            >
                                {hovered[index] && (
                                    <div
                                        className="w-[600px] col-start-1 row-start-1 z-10 pointer-events-none mt-auto px-12 py-8 space-y-4 text-white"
                                        data-aos="fade"
                                        data-aos-duration="400"
                                    >
                                        <div className="flex flex-col space-y-2">
                                            <h3 className="font-bold text-3xl">
                                                {item.title}
                                            </h3>
                                            <p className="text-xl w-[90%]">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex space-x-4">
                                            {item.github ? (
                                                <Link
                                                    href={item.github}
                                                    referrerPolicy="no-referrer"
                                                    target="_blank"
                                                    className="pointer-events-auto hover:text-primary"
                                                >
                                                    <Github />
                                                </Link>
                                            ) : null}
                                            {item.site ? (
                                                <Link
                                                    href={item.site}
                                                    referrerPolicy="no-referrer"
                                                    target="_blank"
                                                    className="pointer-events-auto hover:text-primary"
                                                >
                                                    <GlobeIcon />
                                                </Link>
                                            ) : null}
                                        </div>
                                    </div>
                                )}

                                <div
                                    style={
                                        {
                                            "--image-url": `url(${item.image})`,
                                        } as any
                                    }
                                    className={cn(
                                        "w-[600px] h-80 p-4 rounded-xl col-start-1 row-start-1",
                                        "bg-[image:var(--image-url)] bg-cover",
                                        "hover:brightness-[.275] hover:scale-105 hover:blur-[2px] transition-all duartion-300",
                                        hovered[index] &&
                                            "brightness-[.275] scale-105 blur-[2px] transition-all duration-300" /* Allows for overlaid links */,
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
