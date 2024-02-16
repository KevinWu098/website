import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const LINKS = [
    {
        id: 1,
        link: "https://github.com/kevinwu098",
        text: "Github",
    },
    {
        id: 2,
        link: "https://linkedin.com/in/kevinwu098",
        text: "LinkedIn",
    },
    {
        id: 3,
        link: "https://drive.google.com/file/d/1_XeDSf7CWSSfsnLTxtOxRxfiNOtHbbXJ/view?usp=sharing",
        text: "Resume",
    },
    {
        id: 4,
        link: "https://devpost.com/kevinwu098",
        text: "Devpost",
    },
];

const Links = () => {
    return (
        <div
            className="bg-gradient-to-r from-[#191919] to-[#191919] w-fit h-fit rounded-lg p-2 flex-center absolute -bottom-24 space-x-2 drop-shadow-[0_0px_16px_rgba(35,196,93,0.25)] mt-12"
            data-aos="fade"
            data-aos-duration="400"
            data-aos-delay="1400"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
        >
            {LINKS.map((item, index) => (
                <div className="flex-center space-x-2">
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

            {/* <Link
                href="https://linkedin.com/in/kevinwu098"
                referrerPolicy="no-referrer"
                target="_blank"
            >
                <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                    LinkedIn
                </Button>
            </Link>

            <Separator orientation="vertical" className="h-6 w-[1px]" />

            <Link
                href="https://drive.google.com/drive/u/0/folders/1eDyMudpvJxkKxLpgjXG5O1UuKIDHxWnR"
                referrerPolicy="no-referrer"
                target="_blank"
            >
                <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                    Resume
                </Button>
            </Link>

            <Separator orientation="vertical" className="h-6 w-[1px]" />

            <Link
                href="https://devpost.com/kevinwu098"
                referrerPolicy="no-referrer"
                target="_blank"
            >
                <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                    Devpost
                </Button>
            </Link> */}
        </div>
    );
};

export default Links;
