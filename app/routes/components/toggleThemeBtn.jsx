export default function ToggleButton() {
    const [theme, setTheme] = useState('light');
    if (theme === "light") {
        document.documentElement.classList.add("light");
    }
}