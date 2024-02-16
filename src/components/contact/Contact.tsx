import { SiLinkedin } from "react-icons/si";

const Contact = () => {
    return (
        <div className="bg-[#191919]">
            <div className="wrapper pt-32">
                <div className="text-7xl font-bold">Let's Chat!</div>

                <div>
                    <div className="bg-slate-300 rounded-lg w-10 h-10 flex-center">
                        <SiLinkedin className="w-8 h-8 text-black bg-blend-lighten" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
