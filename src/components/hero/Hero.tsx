import { cn } from "@/lib/utils";

import Links from "./Links";

const Hero = () => {
    return (
        <div className="min-h-screen bg-[#191919] justify-center flex-col flex px-40 bg-cover">
            <div className="-mt-32 relative wrapper">
                <div className="flex flex-col">
                    <span
                        className="font-bold text-2xl"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        Hey! I'm
                    </span>
                    <h1
                        className={cn(
                            "font-bold text-[14rem] leading-none bg-green-600 bg-blend-overlay inline-block text-transparent bg-clip-text",
                            /*"-ml-[15px]",*/
                        )}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        data-aos-once="true"
                    >
                        Kevin Wu
                    </h1>
                    <span
                        className="text-4xl font-bold"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                        data-aos-once="true"
                    >
                        Software Developer | CS @ UCI
                    </span>
                </div>

                <Links />
            </div>
        </div>
    );
};

export default Hero;
