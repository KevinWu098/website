import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import { Separator } from "../ui/separator";

const Contact = () => {
    return (
        <div className="bg-[#191919]" id="contact">
            <div className="wrapper py-20 space-y-16">
                <div className="space-y-3">
                    <div
                        className="text-7xl font-bold"
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        let's chat!
                    </div>
                    <Separator className="w-36 h-1 bg-primary" />
                </div>

                <div className="flex justify-start space-x-12">
                    <Link
                        href="https://linkedin.com/in/kevinwu098"
                        referrerPolicy="no-referrer"
                        target="_blank"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <div className="flex-center space-x-3 hover:scale-105">
                            <FaLinkedin className="w-8 h-8 text-slate-300 bg-blend-lighten" />
                            <p className="text-4xl font-bold">LinkedIn</p>
                        </div>
                    </Link>

                    <Link
                        href="mailto:kevinwu098@gmail.com"
                        referrerPolicy="no-referrer"
                        target="_blank"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <div className="flex-center space-x-3 hover:scale-105">
                            <FaEnvelope className="w-7 h-7 text-slate-300 bg-blend-lighten" />
                            <p className="text-4xl font-bold">Email</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
