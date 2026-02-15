import { useEffect, useRef, useState } from "react";
import LogoMascot from "../assets/images/logo-mascot.png";
import AppliedText from "../assets/svg/Applied.tsx";
import AttendedText from "../assets/svg/Attended.tsx";
import TrainFrontImage from "../assets/images/train-front.png";
import TrainCartAbout from "../assets/images/train-cart-about.png";
import TrainCartBrand from "../assets/images/train-cart-brand.png";
import TrainCartDisplay from "../assets/images/train-cart-display.png";
import TrainCartGallery from "../assets/images/train-cart-gallery.png";
import TrainCartMerch from "../assets/images/train-cart-merch.png";
import TrainWheels from "../assets/images/train-wheels.png";
import { NavLink } from "react-router";

function Home() {
    const [tab, setTab] = useState("events");

    return (
        <>
            <article className="flex justify-center mx-24 my-8">
                <section className="h-fit bg-white ml-16 p-8 pr-32 pb-16 rounded-4xl">
                    <h1 className="text-[80px] text-green font-bold">All Aboard!</h1>
                    <p className="text-4xl">
                        Welcome! I’m Kodi, a Rhode Island–based artist creating
                        anime-inspired character art and mascot designs for small
                        merch. My work is designed for stickers, charms, prints,
                        and custom handmade felt plush keychains.
                    </p>
                </section>
                <section className="w-fit -ml-32">
                    <img
                        src={LogoMascot}
                        alt="Logo and mascot"
                        className="max-w-lg -translate-y-8"
                    />
                </section>
            </article>

            <article className="mx-24">
                <div className="w-full">
                    <section className="relative flex items-end 3xl:-mt-128 2xl:-mt-64 -mt-40">
                        <span className="absolute w-full mx-12 -px-16 rounded-full 3xl:bottom-24 2xl:bottom-16 bottom-12 3xl:h-6 h-4 bg-text -z-20"></span>
                        <span className="flex items-end w-full gap-x-4">
                            <img src={TrainFrontImage} alt="Train front" className="w-full flex-4 -z-10" />
                            {
                                [
                                    { image: TrainCartGallery, link: "/gallery" },
                                    { image: TrainCartMerch, link: "/merch" },
                                    { image: TrainCartDisplay, link: "/display" },
                                    { image: TrainCartBrand, link: "/brand" },
                                    { image: TrainCartAbout, link: "/about" },
                                ].map((cart, index) =>
                                    <>
                                        <NavLink key={index} to={cart.link} className="flex-3 flex flex-col items-center" end>
                                            <img
                                                src={cart.image}
                                                alt="Train cart"
                                                className="w-full z-10 hover:animate-cart transition-transform"
                                            />
                                            <img
                                                key={index + 5}
                                                src={TrainWheels}
                                                alt="Train wheels"
                                                className="-mt-1 w-full -z-10"
                                            />
                                        </NavLink>

                                    </>
                                )
                            }
                        </span>
                    </section>
                </div>
            </article>

            <article className="mx-24 p-4">
                <span>
                    <ul className="flex gap-2 text-4xl font-bold text-white">
                        <li>
                            <button
                                onClick={() => setTab("events")}
                                className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "events" ? "bg-blue" : "bg-dark-blue"}`}
                            >
                                Events
                            </button>
                        </li>
                    </ul>
                </span>
                <div className="w-full h-fit bg-light-blue border-4 border-blue rounded-4xl rounded-tl-none">
                    <section className="flex text-blue">
                        <div className="relative flex">
                            <span className="absolute -translate-x-3 translate-y-3 rotate-3">
                                <AppliedText />
                            </span>
                            <span className="bg-white rounded-full w-36 h-36 flex items-center justify-center m-16">
                                <p className="text-8xl">0</p>
                            </span>
                        </div>
                        <div className="relative flex">
                            <span className="absolute -translate-x-1">
                                <AttendedText />
                            </span>
                            <span className="bg-white rounded-full w-36 h-36 flex items-center justify-center m-16">
                                <p className="text-8xl">0</p>
                            </span>
                        </div>
                    </section>
                    <section className="flex m-4">
                        <div className="flex items-center relative">
                            <div className="border-6 border-text bg-text-light text-5xl font-extrabold rounded-4xl p-4 pr-0">
                                <div className="border-6 border-gray bg-white rounded-4xl p-4 w-lg h-128">
                                    <h1 className="text-red">Applied</h1>
                                    <ul className="text-light-red list-disc p-4 mx-6">
                                        <li>xyz</li>
                                        <li>xyz</li>
                                        <li>xyz</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-0 border-12 border-gray h-128 absolute rounded-full left-1/2 -translate-x-1/2"></div>
                            <div className="border-6 border-text bg-text-light text-5xl font-extrabold rounded-4xl p-4 pl-0">
                                <div className="border-6 border-gray bg-white rounded-4xl p-4 w-lg h-128">
                                    <h1 className="text-green">Attended</h1>
                                    <ul className="text-lime list-disc p-4 mx-6">
                                        <li>xyz</li>
                                        <li>xyz</li>
                                        <li>xyz</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </article >
        </>
    );
}

export default Home;
