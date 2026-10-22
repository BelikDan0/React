import { useState } from "react"
import { useProfile } from "../context/profileContext"

function Settings(){
const{name, setName}=useProfile();
const[draft,setDraft]=useState(name);

function handleSave(e){
    e.preventDefault();
    if(!draft.trim()) return;
    setName(draft.trim());
}

    return(
        <section>
            <div className="settings">

                <h1>Настройки</h1>
                <form onSubmit={handleSave}>
                    <h3>Сменить имя</h3>
                    <input 
                    type="text"
                    value={draft}
                    onChange={(e)=>setDraft(e.target.value)}
                    placeholder="Имя профиля"
                    />
                    <button type="submit">Сохранить</button>
                
                </form>
            </div>
        </section>
    )
}
export default Settings 