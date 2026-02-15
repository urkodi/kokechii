import { NavLink } from "react-router";
import Logo from "../assets/images/logo.png";
import { COLOR_ORDER } from "../utils/Colors";
import Banners from "../components/Banners";
import { useState } from "react";

function Header() {
    const [rippleIndex, setRippleIndex] = useState<number | null>(null);
    const RIPPLE_MAX_INDEX = 8;
    const RIPPLE_DELTA = 200;

    function rippleName() {
        if (rippleIndex !== null) return;

        setRippleIndex(0);
        for (let i = 1; i < RIPPLE_MAX_INDEX; i++) {
            setTimeout(() => setRippleIndex(i), i * RIPPLE_DELTA);
        }
        setTimeout(() => setRippleIndex(null), RIPPLE_MAX_INDEX * RIPPLE_DELTA);
    }

    return (
        <>
            <header className="flex items-center justify-between px-4 bg-white">
                <nav>
                    <NavLink to="/" end>
                        <div className="flex items-center text-5xl font-semibold">
                            <img src={Logo} alt="Logo" className="w-28 mx-4 hover:animate-logo" />
                            <h1 onMouseEnter={rippleName} className="flex">
                                {
                                    "Kokechii".split('').map((char, index) =>
                                        <span
                                            key={index}
                                            style={{
                                                color: COLOR_ORDER[index % COLOR_ORDER.length],
                                                display: "block",
                                                scale: index === rippleIndex ? "105%" : "100%",
                                                transform: index === rippleIndex ? "translateY(-50%)" : "none"
                                            }}
                                            className="transition-transform"
                                        >
                                            {char}
                                        </span>
                                    )
                                }
                            </h1>
                            <span className="mx-4">Station</span>
                        </div>
                    </NavLink>
                </nav>
                <nav className="flex gap-8">
                    <ul className="flex items-center text-2xl font-bold">
                        <li className="text-blue hover:scale-105 transition-transform">
                            <NavLink to="/gallery" className="px-2 py-4" end>
                                Gallery
                            </NavLink>
                        </li>
                        <li className="text-orange hover:scale-105 transition-transform">
                            <NavLink to="/merch" className="px-2 py-4" end>
                                Merch
                            </NavLink>
                        </li>
                        <li className="text-green hover:scale-105 transition-transform">
                            <NavLink to="/display" className="px-2 py-4" end>
                                Display
                            </NavLink>
                        </li>
                        <li className="text-red hover:scale-105 transition-transform">
                            <NavLink to="/brand" className="px-2 py-4" end>
                                Brand
                            </NavLink>
                        </li>
                        <li className="text-fuchsia hover:scale-105 transition-transform">
                            <NavLink to="/about" className="px-2 py-4" end>
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="flex items-center text-gray text-2xl">
                        <li>
                            <NavLink to="/help" className="px-2 py-4" end>
                                Help
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="px-2 py-4" end>
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Banners />
        </>
    );
}

export default Header;
