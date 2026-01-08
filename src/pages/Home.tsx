import LogoMascot from "../assets/images/logo-mascot.png";
import AppliedText from "../assets/svg/Applied.tsx";
import AttendedText from "../assets/svg/Attended.tsx";

function Home() {
    return (
        <>
            <article className="flex bg-white rounded-4xl ml-16 mr-64 my-8 p-8 pt-0 pb-16 w-fit">
                <section className="flex-3">
                    <h1 className="text-[80px] text-green font-bold">All Aboard!</h1>
                    <p className="text-4xl">
                        Welcome! I’m Kodi, a Rhode Island–based artist creating
                        anime-inspired character art and mascot designs for small
                        merch. My work is designed for stickers, charms, prints,
                        and custom handmade felt plush keychains.
                    </p>
                </section>
                <section className="flex-2 relative">
                    <img
                        src={LogoMascot}
                        alt="Logo and mascot"
                        className="absolute max-w-lg -translate-y-8"
                    />
                </section>
            </article>

            <article className="mx-16 p-4">
                <span className="rounded-t-4xl text-white bg-blue text-6xl p-4 pb-0">Events</span>
                <div className="w-full h-fit bg-light-blue border-4 border-blue">
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
                                    <h1 className="text-green">Applied</h1>
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
