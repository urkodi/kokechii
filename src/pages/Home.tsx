import Banners from "../components/Banners.tsx";
import LogoMascot from "../assets/logo-mascot.png";
import Events from "../components/Events.tsx";

function Home() {
    return (
        <>
            <Banners />
            <article className="flex bg-white rounded-4xl ml-16 mr-64 my-8 p-8 pb-32 w-fit">
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
                        className="absolute max-w-xl -translate-y-8"
                    />
                </section>
            </article>

            <Events />
        </>
    );
}

export default Home;
