import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav className="wrapper sticky flex-between inset-x-0 z-30 h-24">
                <div />

                <ul className="flex gap-x-6 font-bold">
                    <li>about</li>
                    <li>portfolio</li>
                    <li>contact</li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
