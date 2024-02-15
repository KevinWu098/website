import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Links = () => {
    return (
        <div
            className="bg-gradient-to-r from-slate-700 to-slate-600 w-fit h-fit rounded-lg p-2 flex-center absolute -bottom-24 space-x-2 drop-shadow-[0_0px_16px_rgba(55,124,151,0.3)] mt-12"
            data-aos="fade"
            data-aos-duration="400"
            data-aos-delay="1400"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
        >
            <Link
                href="https://github.com/kevinwu098"
                referrerPolicy="no-referrer"
                target="_blank"
            >
                <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                    Github
                </Button>
            </Link>

            <Separator orientation="vertical" className="h-6 w-[1px]" />

            <Link
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
                href="https://devpost.com/kevinwu098"
                referrerPolicy="no-referrer"
                target="_blank"
            >
                <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                    Devpost
                </Button>
            </Link>
        </div>
    );
};

export default Links;
