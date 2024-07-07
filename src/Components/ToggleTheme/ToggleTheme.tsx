import styles from "./ToggleTheme.module.scss"
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext.tsx";

const ToggleTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? styles['wrapper-light'] : styles['wrapper-dark']}>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className={theme === 'light' ? styles['button-light'] : styles['button-dark']}>Toggle Theme</button>
        </div>
    )
}

export default ToggleTheme