import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"
const ProfileContext = createContext(null);

export function ProfileProvider({children}){
    const[name, setName]=useState(()=>{
        const saved=localStorage.getItem("profileName")
        return saved || "Даниил";
    });

    useEffect(()=>{
        localStorage.setItem("profileName",name);
    },[name]);
    return(
        <ProfileContext.Provider value={{name,setName}}>
            {children}
        </ProfileContext.Provider>
    )
}
export function useProfile(){
    return useContext(ProfileContext)
}