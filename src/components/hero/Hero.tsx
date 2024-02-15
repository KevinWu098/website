import Links from "./Links";

const Hero = () => {
    return (
        <div className="min-h-screen bg-[#191919] justify-center flex-col flex px-40 bg-cover">
            <div className="-mt-20 relative">
                <div className="flex flex-col">
                    <span className="font-bold text-2xl">Hey! I'm</span>
                    <h1 className="font-bold text-[14rem] leading-none -ml-[15px] bg-gradient-to-r w-fit from-green-500 to-green-500 bg-blend-overlay inline-block text-transparent bg-clip-text">
                        Kevin Wu
                    </h1>
                </div>
                <div>
                    <span className="text-4xl font-bold">
                        Software Developer | CS @ UCI
                    </span>
                </div>

                <div className="bg-gradient-to-r from-slate-700 to-slate-600 w-fit h-fit rounded-lg p-2 flex-center absolute -bottom-24 space-x-2 drop-shadow-[0_0px_16px_rgba(55,124,151,0.3)] mt-12">
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Hero;
