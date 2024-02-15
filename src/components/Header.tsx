import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
    return (
        <>
            <nav className="wrapper absolute top-0 flex-between inset-x-0 z-30 h-24 bg-transparent">
                <div />

                <ul className="flex gap-x-6 font-bold text-lg">
                    <li>about</li>
                    <li>portfolio</li>
                    <li>contact</li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
