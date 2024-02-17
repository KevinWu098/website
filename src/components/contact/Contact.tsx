import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import { Separator } from "../ui/separator";

const Contact = () => {
    return (
        <div className="bg-[#191919]">
            <div className="wrapper py-20 space-y-16">
                <div className="space-y-3">
                    <div className="text-7xl font-bold">let's chat!</div>
                    <Separator className="w-36 h-1 bg-primary" />
                </div>

                <div className="flex justify-start space-x-12">
                    <Link
                        href="https://linkedin.com/in/kevinwu098"
                        referrerPolicy="no-referrer"
                        target="_blank"
                        className="flex-center space-x-3 hover:scale-105"
                    >
                        <FaLinkedin className="w-8 h-8 text-slate-300 bg-blend-lighten" />
                        <p className="text-4xl font-bold">LinkedIn</p>
                    </Link>

                    <Link
                        href="mailto:kevinwu098@gmail.com"
                        referrerPolicy="no-referrer"
                        target="_blank"
                        className="flex-center space-x-3 hover:scale-105"
                    >
                        <FaEnvelope className="w-7 h-7 text-slate-300 bg-blend-lighten" />
                        <p className="text-4xl font-bold">Email</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
