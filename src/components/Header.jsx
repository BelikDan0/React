import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
function Header() {
    const {theme, toggleTheme}=useTheme()
    return (
        <header className="header">
            <h1>BELKA🐿️</h1>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/profile">Профиль</Link>
                <Link to="/settings">Настройки</Link>
                <Link to="/about">О нас</Link>
                <button onClick={toggleTheme}>{theme=== "light" ? "dark":"light"}</button>
        
            </nav>
        </header>
    )
}

export default Header;