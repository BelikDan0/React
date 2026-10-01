import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";
function Profile(){
     const [posts,setPosts] = useState([
        {
            id: 1,
            title: "Title1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            author: "Tramp"

        }
    ]);
    const [title,setTiile]=useState("");
    const[text,setText]=useState("");
    
    function addPost(event){
        event.preventDefault();
        const newPost={
            id: Date.now(),
            title: title,
            text: text,
            author: "Daniil"
        };
        setPosts([...posts, newPost]);

        setTiile("");
        setText("");
    }
    function deletePost(id){
        setPosts(
            posts.filter(
                (post)=>post.id != id )
        );
        
    }
    return(
        <section>
            <h1>Профиль</h1>
            <ProfileCard/>
            <div className="fead">
                <h2>Мои публикации</h2>
                <form className="post-form" onSubmit={addPost}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(event)=> setTiile(event.target.value)} />
                <br />
                <textarea placeholder="Текст поста" value={text} onChange={(event)=> setText(event.target.value)}/>
                <br />
                <button type="submit">Опубликовать</button>
            </form>

            {posts.map((post) => (
                <Post key={post.id} author={post.author} title={post.title} text={post.text} id={post.id} onDelete={deletePost}  />
            ))}

            </div>
        </section>
    )
}
export default Profile