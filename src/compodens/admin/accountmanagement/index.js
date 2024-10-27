import { createContext, useContext, useState } from "react";
import classnames from "classnames/bind";
import styles from "./Accountmanagement-module.scss"; // Import CSS file containing styles for light and dark themes
const cx = classnames.bind(styles);
const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          Use {theme === "light" ? "dark" : "light"} mode
        </label>
      </div>
    </ThemeContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const { theme } = useContext(ThemeContext);
  const className = `panel panel-${theme}`;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const { theme } = useContext(ThemeContext);
  const className = `button button-${theme}`;
  return <button className={className}>{children}</button>;
}
