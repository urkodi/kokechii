import { NavLink } from "react-router";
import { COLOR_ORDER } from "../utils/Colors";
import Instagram from "../assets/images/instagram.png";
import Store from "../assets/images/shop.png";
import Twitter from "../assets/images/twitter.png";

function Footer() {
    return (
        <footer className="bg-white flex justify-between items-center p-4">
            <nav>
                <NavLink to="/" end>
                    <h1 className="flex text-4xl font-semibold">
                        {
                            "Kokechii".split('').map((char, index) =>
                                <span
                                    key={index}
                                    style={{
                                        color: COLOR_ORDER[index % COLOR_ORDER.length],
                                        display: "block",
                                    }}
                                >
                                    {char}
                                </span>
                            )
                        }
                        <span className="mx-4">Station</span>
                    </h1>
                </NavLink>
            </nav>
            <nav className="flex gap-4 items-center">
                <ul className="flex items-center gap-2">
                    <li>
                        <NavLink to="instagram" end>
                            <img src={Instagram} alt="Instagram" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="store" end>
                            <img src={Store} alt="Store" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="twitter" end>
                            <img src={Twitter} alt="Twitter" />
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex items-center text-gray text-2xl">
                    <li>
                        <NavLink to="credits" className="p-1" end>
                            Credits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="help" className="p-1" end>
                            Help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" className="p-1" end>
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
