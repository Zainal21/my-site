import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { RoundedButtonBox } from "../../design-system";

const ToggleNav = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedThemeOnLocalStorage = localStorage.getItem("theme");

      if (!storedThemeOnLocalStorage) {
        localStorage.setItem("theme", "dark");
        setTheme(localStorage.getItem("theme"));
        return;
      }

      localStorage.setItem("theme", storedThemeOnLocalStorage);
      setTheme(storedThemeOnLocalStorage);

      storedThemeOnLocalStorage === "light"
        ? document.querySelector("html")?.classList.remove("dark")
        : document.querySelector("html")?.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "t" && e.key.toLowerCase() === "control") {
        toggleTheme(localStorage.getItem("theme"));
      }
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  const toggleTheme = (theme: string | null) => {
    let newThemeToToggle = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newThemeToToggle);
    setTheme(newThemeToToggle);

    newThemeToToggle === "light"
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  return (
    <RoundedButtonBox
      title={`Toggle ${theme === "dark" ? "Dark Mode" : "Light Theme"} (T)`}
      onClick={() => toggleTheme(theme)}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </RoundedButtonBox>
  );
};

export default ToggleNav;