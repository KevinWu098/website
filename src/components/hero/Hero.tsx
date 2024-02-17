import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";
import Links from "./Links";

const Hero = () => {
    return (
        <div
            className="min-h-screen bg-[#191919] justify-center flex-col flex bg-cover"
            id="hero"
        >
            <div className="-mt-32 relative wrapper">
                <div className="px-8 md:px-0">
                    <div className="flex flex-col">
                        <span
                            className="font-bold text-xl lg:text-2xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                            data-aos-once="true"
                        >
                            Hey! I'm
                        </span>
                        <h1
                            className={cn(
                                "font-bold bg-green-600 bg-blend-overlay inline-block text-transparent bg-clip-text",
                                "text-9xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] leading-none",
                            )}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            data-aos-once="true"
                        >
                            Kevin Wu
                        </h1>
                        <span
                            className="text-2xl lg:text-4xl font-bold flex items-center space-x-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            data-aos-once="true"
                        >
                            <span>Fullstack Developer</span>
                            <Separator
                                orientation="vertical"
                                className="h-6 lg:h-8 w-[2px]"
                            />
                            <span>CS @ UCI</span>
                        </span>
                    </div>

                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Hero;
