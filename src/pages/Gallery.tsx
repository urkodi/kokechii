import { useEffect, useState } from "react";

function Gallery() {
    const [tab, setTab] = useState("originals");
    const [iconUrls, setIconUrls] = useState<string[]>([]);
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getImages() {
            setIsLoading(true);

            const res = await fetch(`${import.meta.env.VITE_IMAGE_URL}/icon/gallery/${tab}/`);
            const imageListings: ImageListing[] = await res.json();

            setIconUrls(imageListings.map(listing => `${import.meta.env.VITE_IMAGE_URL}/icon/gallery/${tab}/${listing.name}`));
            setImageUrls(imageListings.map(listing => `${import.meta.env.VITE_IMAGE_URL}/full/gallery/${tab}/${listing.name}`));
            setIsLoading(false);
        }
        getImages();
    }, [tab]);

    return (
        <>
            <h1 className="w-full bg-white p-4 rounded-full text-6xl font-extrabold text-blue my-8">Gallery</h1>
            <span>
                <ul className="flex gap-2 text-4xl font-bold text-white">
                    <li>
                        <button onClick={() => setTab("originals")} className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "originals" ? "bg-blue" : "bg-dark-blue"}`}>Originals</button>
                    </li>
                    <li>
                        <button onClick={() => setTab("fanart")} className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "fanart" ? "bg-blue" : "bg-dark-blue"}`}>Fanart</button>
                    </li>
                </ul>
            </span>
            <article className="border-4 border-blue bg-blue rounded-4xl rounded-tl-none">
                <div className="bg-light-blue rounded-4xl">
                    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto gap-4 place-content-center">
                        {
                            isLoading ? (
                                <div className="w-full flex flex-col items-center justify-center gap-4">
                                    <p className="text-4xl font-bold text-white">Loading</p>
                                    <span className="w-32 h-32 rounded-[50%] border-t-2 border-r-4 border-white animate-spin"></span>
                                </div>) : (
                                imageUrls.length > 0 ? (
                                    imageUrls.map((url, index) =>
                                        <a href={url} className="w-full h-full flex items-center">
                                            <img
                                                src={iconUrls[index]}
                                                alt="Gallery image"
                                                key={index}
                                                className="w-full hover:scale-105 transition-transform mx-auto rounded-md"
                                            />
                                        </a>
                                    )
                                ) : (
                                    <div className="w-full flex flex-col items-center justify-center gap-4">
                                        <p className="text-4xl font-bold text-white">Nothing here</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </article >
        </>
    );
}

export default Gallery;
