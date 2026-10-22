import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"

const ProfileContext = createContext(null);

const DEFAULT_NAME = "Даниил";
const DEFAULT_AVATAR = "/images/images.jfif";

export function ProfileProvider({ children }) {
    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("profileName");
        return saved || DEFAULT_NAME;
    });

    const [avatar, setAvatar] = useState(() => {
        const saved = localStorage.getItem("profileAvatar");
        return saved || DEFAULT_AVATAR;
    });

    useEffect(() => {
        localStorage.setItem("profileName", name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem("profileAvatar", avatar);
    }, [avatar]);

    return (
        <ProfileContext.Provider value={{ name, setName, avatar, setAvatar }}>
            {children}
        </ProfileContext.Provider>
    )
}

export function useProfile() {
    const context = useContext(ProfileContext);
    if (context == null) {
        throw new Error("useProfile должен использоваться внутри ProfileProvider");
    }
    return context;
}