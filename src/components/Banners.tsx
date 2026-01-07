import { useCallback, useEffect, useState } from "react";
import { COLOR_ORDER } from "../utils/Colors";

function Banners() {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const rems = 16;

    const [count, setCount] = useState(calculateCount());

    function calculateCount(): number {
        return Math.ceil(4 * window.innerWidth / (rem * rems));
    }

    const handleWindowResize = useCallback(() => {
        setCount(calculateCount());
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [handleWindowResize]);

    return (
        <div className="flex overflow-hidden">
            {
                Array.from({ length: count }).map((_, index) => (
                    <span
                        key={index}
                        style={{
                            backgroundColor: COLOR_ORDER[index % COLOR_ORDER.length],
                            minWidth: `${rem * rems / 4}px`,
                            maxWidth: `${rem * rems / 4}px`,
                            minHeight: `${rem * rems / 4}px`,
                            maxHeight: `${rem * rems / 4}px`,
                            borderBottom: "50%"
                        }}
                        className="rounded-b-[50%] block"
                    />
                ))
            }
        </div>
    );
}

export default Banners;
