import { useState } from "react";

function Brand() {
    const [tab, setTab] = useState("fox");

    return (
        <>
            <h1 className="w-full bg-white p-4 rounded-full text-6xl font-extrabold text-red my-8">Brand</h1>
            <span>
                <ul className="flex gap-2 text-4xl font-bold text-white">
                    <li>
                        <button
                            onClick={() => setTab("fox")}
                            className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "fox" ? "bg-red" : "bg-dark-red"}`}
                        >
                            Fox
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setTab("duck")}
                            className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "duck" ? "bg-red" : "bg-dark-red"}`}
                        >
                            Duck
                        </button>
                    </li>
                </ul>
            </span>
            <article className="border-4 border-red bg-red rounded-4xl rounded-tl-none">
                <div className="bg-light-red rounded-4xl">
                    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto gap-4 place-content-center">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <p className="text-4xl font-bold text-white">Nothing here</p>
                        </div>
                    </div>
                </div>
            </article >
        </>
    )
}

export default Brand;
