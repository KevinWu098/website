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

                <Links />
            </div>
        </div>
    );
};

export default Hero;
