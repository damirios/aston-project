import { useEffect, useState } from "react";

export default function useDebounce(value, delayMs) {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delayMs);

        return () => {
            clearTimeout(handler);
        }
    }, [value]);

    return debouncedValue;
}