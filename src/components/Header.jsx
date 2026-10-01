import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="header">
            <h1>SOCIAL NETWORK</h1>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/profile">Профиль</Link>
                <Link to="/settings">Настройки</Link>
                <Link to="/about">О нас</Link>
        
            </nav>
        </header>
    )
}

export default Header;