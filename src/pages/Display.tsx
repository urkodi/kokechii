import { useState } from "react";

function Display() {
    const [tab, setTab] = useState("current");

    return (
        <>
            <h1 className="w-full bg-white p-4 rounded-full text-6xl font-extrabold text-green my-8">Display</h1>
            <span>
                <ul className="flex gap-2 text-4xl font-bold text-white">
                    <li>
                        <button
                            onClick={() => setTab("current")}
                            className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "current" ? "bg-green" : "bg-lime"}`}
                        >
                            Current
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setTab("mockups")}
                            className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "mockups" ? "bg-green" : "bg-lime"}`}
                        >
                            Mockups
                        </button>
                    </li>
                </ul>
            </span>
            <article className="border-4 border-green bg-green rounded-4xl rounded-tl-none">
                <div className="bg-light-green rounded-4xl">
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

export default Display;
