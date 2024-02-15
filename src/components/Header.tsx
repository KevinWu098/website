"use client";

const Header = () => {
    return (
        <>
            <nav className="wrapper absolute top-0 flex-between inset-x-0 z-30 h-24 bg-transparent">
                <div />

                <ul className="flex gap-x-6 font-bold text-lg">
                    <li
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        about
                    </li>
                    <li
                        data-aos="fade-down"
                        data-aos-duration="1100"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        portfolio
                    </li>
                    <li
                        data-aos="fade-down"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        contact
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
