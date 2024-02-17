import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import { Separator } from "../ui/separator";

const Contact = () => {
    return (
        <div className="bg-[#191919]" id="contact">
            <div className="wrapper py-20">
                <div className="px-8 md:px-0 space-y-8 md:space-y-16">
                    <div
                        className="space-y-3"
                        data-aos="fade-left"
                        data-aos-duration="900"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <div className="text-5xl md:text-7xl font-bold">
                            let's chat!
                        </div>
                        <Separator className="w-36 h-1 bg-primary" />
                    </div>
                    <div className="flex flex-col xs:flex-row justify-start items-start text-left gap-y-2 xs:space-x-6 md:space-x-12 text-2xl md:text-4xl font-bold">
                        <Link
                            href="https://linkedin.com/in/kevinwu098"
                            referrerPolicy="no-referrer"
                            target="_blank"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <div className="flex-center space-x-3 hover:scale-105 w-full">
                                <FaLinkedin className="w-6 md:w-8 h-6 md:h-8 text-slate-300 bg-blend-lighten" />
                                <p>LinkedIn</p>
                            </div>
                        </Link>
                        <Link
                            href="mailto:kevinwu098@gmail.com"
                            referrerPolicy="no-referrer"
                            target="_blank"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <div className="flex-center space-x-3 hover:scale-105 w-full">
                                <FaEnvelope className="w-6 md:w-7 h-6 md:h-7 text-slate-300 bg-blend-lighten" />
                                <p>Email</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
