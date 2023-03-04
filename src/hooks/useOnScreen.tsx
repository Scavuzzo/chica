import { RefObject, useEffect, useState } from "react";

interface OnScreen {
    ref: RefObject<any>,
    rootMargin?: string
}

export default function useOnScreen({ref, rootMargin = "0px"}: OnScreen) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                if(entry.isIntersecting) {
                    setIntersecting(entry.isIntersecting);
                    observer.unobserve(ref.current)                   
                }
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}