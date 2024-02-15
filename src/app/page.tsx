export default function Home() {
    return (
        <main className="min-h-screen wrapper">
            <div className="flex justify-center flex-col pt-40 space-y-4">
                <div className="flex flex-col">
                    <span className="font-bold text-lg">Hey! I'm</span>
                    <h1 className="font-bold text-9xl bg-gradient-to-br from-green-800 via-green-700 to-green-500 bg-blend-overlay inline-block text-transparent bg-clip-text">
                        Kevin Wu
                    </h1>
                </div>

                <div>
                    <span className="text-2xl font-bold">
                        Software Developer | CS @ UCI
                    </span>
                </div>
            </div>
        </main>
    );
}
