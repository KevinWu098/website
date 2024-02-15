import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="min-h-screen bg-[#191919] justify-center flex-col flex space-y-4 px-40 bg-cover">
                <div className="-mt-4">
                    <div className="flex flex-col">
                        <span className="font-bold text-2xl">Hey! I'm</span>
                        <h1 className="font-bold text-[14rem] leading-none -ml-[15px] bg-gradient-to-r w-fit from-green-500 to-green-500 bg-blend-overlay inline-block text-transparent bg-clip-text">
                            Kevin Wu
                        </h1>
                    </div>
                    <div>
                        <span className="text-4xl font-bold">
                            Software Developer | CS @ UCI
                        </span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#191919] via-slate-700 to-slate-600 w-fit h-fit rounded-lg p-2 flex space-x-4 md:drop-shadow-[0_0px_16px_rgba(55,124,151,0.4)]">
                    <Link
                        href="https://github.com/kevinwu098"
                        referrerPolicy="no-referrer"
                        target="_blank"
                    >
                        <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                            Github
                        </Button>
                    </Link>

                    <Separator orientation="vertical" className="h-full" />

                    <Link
                        href="https://github.com/kevinwu098"
                        referrerPolicy="no-referrer"
                        target="_blank"
                    >
                        <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                            LinkedIn
                        </Button>
                    </Link>

                    <Separator orientation="vertical" />

                    <Link
                        href="https://github.com/kevinwu098"
                        referrerPolicy="no-referrer"
                        target="_blank"
                    >
                        <Button className="bg-transparent hover:bg-black hover:bg-opacity-20 text-xl">
                            Devpost
                        </Button>
                    </Link>
                </div>
            </div>

            <div>fkdajshfkjshd</div>
        </main>
    );
}
