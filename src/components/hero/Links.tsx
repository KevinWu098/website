import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaLinkedinIn } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiDevpost, SiGithub } from "react-icons/si";

const LINKS = [
    {
        id: 1,
        link: "https://github.com/kevinwu098",
        text: "Github",
        icon: <SiGithub className="w-8 h-8" />,
    },
    {
        id: 2,
        link: "https://linkedin.com/in/kevinwu098",
        text: "LinkedIn",
        icon: <FaLinkedinIn className="w-8 h-8" />,
    },
    {
        id: 3,
        link: "https://drive.google.com/file/d/1_XeDSf7CWSSfsnLTxtOxRxfiNOtHbbXJ/view?usp=sharing",
        text: "Resume",
        icon: <IoDocumentText className="w-8 h-8" />,
    },
    {
        id: 4,
        link: "https://devpost.com/kevinwu098",
        text: "Devpost",
        icon: <SiDevpost className="w-8 h-8" />,
    },
];

const Links = () => {
    return (
        <div
            data-aos="fade"
            data-aos-duration="400"
            data-aos-delay="1400"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
        >
            <div className="bg-[#191919] w-fit h-fit rounded-lg p-2 items-center absolute -bottom-24 space-x-2 drop-shadow-[0_0px_16px_rgba(35,196,93,0.25)] mt-12 hidden md:flex">
                {LINKS.map((item, index) => (
                    <div className="flex-center space-x-2" key={item.id}>
                        <Link
                            href={item.link}
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            <Button className="bg-transparent hover:bg-white hover:bg-opacity-5 text-xl">
                                {item.text}
                            </Button>
                        </Link>
                        {index + 1 != LINKS.length ? (
                            <Separator
                                orientation="vertical"
                                className="h-6 w-[1px]"
                            />
                        ) : null}
                    </div>
                ))}
            </div>

            <div className="pt-8 -mb-24 grid grid-cols-2 xs:grid-cols-4 md:hidden w-fit gap-4">
                {LINKS.map((item) => (
                    <Link href={item.link} key={item.id}>
                        <div className="w-fit p-4 rounded-lg drop-shadow-[0_0px_16px_rgba(35,196,93,0.125)] bg-[#191919] hover:scale-105 hover:drop-shadow-[0_0px_16px_rgba(35,196,93,0.25)]">
                            {item.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Links;
