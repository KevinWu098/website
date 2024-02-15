import Links from "./Links";

const Hero = () => {
    return (
        <div className="min-h-screen bg-[#191919] justify-center flex-col flex px-40 bg-cover">
            <div className="-mt-32 relative">
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
                        className="font-bold text-[14rem] leading-none -ml-[15px] bg-green-500 bg-blend-overlay inline-block text-transparent bg-clip-text"
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

                <div
                    className="bg-gradient-to-r from-slate-700 to-slate-600 w-fit h-fit rounded-lg p-2 flex-center absolute -bottom-24 space-x-2 drop-shadow-[0_0px_16px_rgba(55,124,151,0.3)] mt-12"
                    data-aos="fade"
                    data-aos-duration="400"
                    data-aos-delay="1400"
                    data-aos-once="true"
                    data-aos-easing="ease-in-out"
                >
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Hero;
