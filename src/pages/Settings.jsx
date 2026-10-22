import { useState } from "react";
import { useProfile } from "../context/profileContext";

function Settings() {
    const { name, setName, avatar, setAvatar } = useProfile();
    const [draft, setDraft] = useState(name);

    function handleSave(e) {
        e.preventDefault();
        if (!draft.trim()) return;
        setName(draft.trim());
    }

    function handleAvatarChange(e) {
        const file = e.target.files?.[0];
        if (!file) return;

        // ограничение 1 МБ — localStorage не резиновый
        if (file.size > 1024 * 1024) {
            alert("Файл больше 1 МБ. Выбери картинку поменьше.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result); // base64-строка
        };
        reader.readAsDataURL(file);
    }

    function resetAvatar() {
        setAvatar("/images/images.jfif");
    }

    return (
        <section>
            <div className="settings">
                <h1>Настройки</h1>

                {/* === ИМЯ === */}
                <form onSubmit={handleSave}>
                    <h3>Сменить имя</h3>
                    <input
                        type="text"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        placeholder="Имя профиля"
                    />
                    <button type="submit">Сохранить</button>
                </form>

                {/* === АВАТАР === */}
                <div className="avatar-settings">
                    <h3>Сменить аватар</h3>

                    <div className="avatar-preview">
                        <img src={avatar} alt="Аватар" />
                    </div>

                    <label className="avatar-upload-btn">
                        Загрузить картинку
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            hidden
                        />
                    </label>

                    <button
                        type="button"
                        className="avatar-reset-btn"
                        onClick={resetAvatar}
                    >
                        Сбросить
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Settings;