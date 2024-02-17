import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#242424]">
            <div className="wrapper flex-center flex-col gap-y-2 py-8 text-xl font-bold">
                <p>Made with 💖</p>
                <Link
                    href="https://github.com/kevinwu098/me"
                    referrerPolicy="no-referrer"
                    target="_blank"
                >
                    <FaGithub className="hover:text-primary" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
