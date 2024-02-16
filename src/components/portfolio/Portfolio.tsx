"use client";

import { useState } from "react";
import Link from "next/link";
import ConditionalWrapper from "@/lib/ConditionalWrapper";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";
import { SiDevpost, SiGithub, SiLinkedin } from "react-icons/si";

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        title: "Agentic",
        description: "An accessibility tool, powered by AI large action model",
        image: "/portfolio/agentic.png",
        win: "🥇 SB Hacks X",
        github: "https://github.com/laurelin60/agentic",
        devpost: "https://devpost.com/software/agentic",
    },
    {
        id: 2,
        title: "Life, Squared",
        description: "Online, interactive life calendar",
        image: "/portfolio/lifesquared.png",
        github: "https://github.com/kevinwu098/lifesquared",
        site: "https://lifesquared.vercel.app",
    },
    {
        id: 3,
        title: "GE-Z",
        description:
            "The only reverse articulation search for California university students",
        image: "/portfolio/gez.png",
        win: "🥇 WebJam 2023",
        github: "https://github.com/laurelin60/ge-z-frontend",
        site: "https://ge-z.vercel.app",
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

const Portfolio = () => {
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
        <div className="min-h-screen bg-[#242424]">
            <div className="wrapper py-32 flex-center flex-col">
                <h2
                    className="text-7xl font-bold text-slate-300"
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    portfolio
                </h2>
                <div className="grid grid-cols-2 gap-8 mt-12" id="aos-parent">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <ConditionalWrapper
                            /* Type converts string to boolean */
                            condition={!!item.github}
                            wrapper={(children: React.ReactNode) => (
                                <Link
                                    href={item.github ?? "/"}
                                    referrerPolicy="no-referrer"
                                    target="_blank"
                                >
                                    {children}
                                </Link>
                            )}
                            key={item.id}
                        >
                            <div
                                className="overflow-hidden grid border-b-4 border-transparent hover:border-primary transition-all transform"
                                key={item.id}
                                onMouseOver={() => handleHover(index)}
                                onMouseOut={() => handleUnhover()}
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay={String(200 + item.id * 200)}
                                data-aos-once="true"
                                data-aos-anchor="#aos-parent"
                            >
                                {hovered[index] && (
                                    <div
                                        className="w-[600px] col-start-1 row-start-1 z-10 pointer-events-none mt-auto px-12 py-8 space-y-4 text-white"
                                        data-aos="fade"
                                        data-aos-duration="400"
                                    >
                                        <div className="flex flex-col space-y-2">
                                            <h3 className="font-bold text-3xl flex items-end space-x-2">
                                                <span>{item.title}</span>
                                                {item.win ? (
                                                    <span>
                                                        -{" "}
                                                        <span className="text-yellow-400">
                                                            {item.win}
                                                        </span>
                                                    </span>
                                                ) : null}
                                            </h3>
                                            <p className="text-xl w-[90%]">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            {item.github ? (
                                                <Link
                                                    href={item.github}
                                                    referrerPolicy="no-referrer"
                                                    target="_blank"
                                                    className="pointer-events-auto hover:text-primary text-2xl"
                                                >
                                                    <SiGithub />
                                                </Link>
                                            ) : null}
                                            {item.site ? (
                                                <Link
                                                    href={item.site}
                                                    referrerPolicy="no-referrer"
                                                    target="_blank"
                                                    className="pointer-events-auto hover:text-primary text-2xl"
                                                >
                                                    <GlobeIcon />
                                                </Link>
                                            ) : null}
                                            {item.devpost ? (
                                                <Link
                                                    href={item.devpost}
                                                    referrerPolicy="no-referrer"
                                                    target="_blank"
                                                    className="pointer-events-auto hover:text-primary text-2xl"
                                                >
                                                    <SiDevpost />
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
                                        "bg-[image:var(--image-url)] bg-cover bg-top",
                                        "hover:brightness-[.275] hover:scale-105 hover:blur-[2px] transition-all duartion-300",
                                        hovered[index] &&
                                            "brightness-[.275] scale-105 blur-[2px] transition-all duration-300" /* Allows for overlaid links */,
                                    )}
                                />
                            </div>
                        </ConditionalWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
