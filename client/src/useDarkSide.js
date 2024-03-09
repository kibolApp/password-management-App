import { useState, useEffect } from "react";

export default function useDarkSide() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light'));
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}