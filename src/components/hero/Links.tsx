import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Links = () => {
    return (
        <>
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
        </>
    );
};

export default Links;
