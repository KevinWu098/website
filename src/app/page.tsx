import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Portfolio />
            <Contact />
        </main>
    );
}
