import { useState } from "react";

function Merch() {
    const [tab, setTab] = useState("current");

    return (
        <>
            <h1 className="w-full bg-white p-4 rounded-full text-6xl font-extrabold text-orange my-8">Merch</h1>
            <span className="flex justify-between">
                <ul className="flex gap-2 text-4xl font-bold text-white">
                    <li>
                        <button
                            onClick={() => setTab("current")}
                            className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "current" ? "bg-orange" : "bg-dark-orange"}`}
                        >
                            Current
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setTab("planned")}
                            className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "planned" ? "bg-orange" : "bg-dark-orange"}`}
                        >
                            Planned
                        </button>
                    </li>
                </ul>
                <ul className="flex gap-2 text-4xl font-bold text-white">
                    <li>
                        <button
                            onClick={() => setTab("retired")}
                            className={`transition-colors rounded-t-4xl p-4 cursor-pointer ${tab === "retired" ? "bg-orange" : "bg-red"}`}
                        >
                            Retired
                        </button>
                    </li>
                </ul>
            </span>
            <article className="border-4 border-orange bg-orange rounded-4xl rounded-t-none">
                <div className="bg-light-orange rounded-4xl">
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

export default Merch;
