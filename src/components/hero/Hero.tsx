import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";
import Links from "./Links";

const Hero = () => {
    return (
        <div
            className="min-h-screen bg-[#191919] justify-center flex-col flex bg-cover"
            id="hero"
        >
            <div className="-mt-36 xs:-mt-24 relative wrapper">
                <div className="px-8 md:px-0">
                    <div className="flex flex-col">
                        <span
                            className="font-bold text-lg sm:text-xl lg:text-2xl"
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
                                "text-[5rem] xs:text-8xl sm:text-[7.5rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] lg:leading-none leading-[1.1]",
                            )}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            data-aos-once="true"
                        >
                            Kevin Wu
                        </h1>
                        <span
                            className="text-2xl lg:text-4xl font-bold flex justify-center xs:items-center space-y-2 xs:space-y-0 xs:space-x-4 flex-col xs:flex-row"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            data-aos-once="true"
                        >
                            <span className="w-full xs:w-fit shrink-0 text-left">
                                Fullstack Developer
                            </span>
                            <Separator
                                orientation="horizontal"
                                className="w-12 h-[2px] xs:hidden"
                            />
                            <div className="flex items-center xs:space-x-4 w-full">
                                <Separator
                                    orientation="vertical"
                                    className="h-6 lg:h-8 w-[2px] hidden xs:flex"
                                />
                                <span className="w-full text-left">
                                    CS @ UCI
                                </span>
                            </div>
                        </span>
                    </div>

                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Hero;
