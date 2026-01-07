import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { COLOR_ORDER } from "../utils/Colors";

function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end>
                            <div className="flex items-center text-5xl font-semibold">
                                <img src={Logo} alt="Logo" className="w-32" />
                                <h1>
                                    {
                                        "Koechii".split('').map((char, index) =>
                                            <span key={index} style={{ color: COLOR_ORDER[index % COLOR_ORDER.length] }}>{char}</span>
                                        )
                                    }
                                    <span> Station</span>
                                </h1>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <NavLink to="/help" end>
                            Help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" end>
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
