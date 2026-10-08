import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";
function Profile(){
    //  const [posts,setPosts] = useState([
    //     {
    //         id: 1,
    //         title: "Title1",
    //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //         author: "Tramp",
    //         avatar: "/images/images.jfif",

    //     }
    // ]);

    const [posts, setPosts]= useState(() =>
    {
        const savedPosts=localStorage.getItem("posts")
        if(savedPosts){
            return JSON.parse(savedPosts)
        }
        return[
            {
             id: 1,
             title: "Title1",
             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
             author: "Tramp",
             avatar: "/images/images.jfif",

            }
        ];
    });
    const [title,setTiile]=useState("");
    const[text,setText]=useState("");
    // useEffect(() => {
    //     console.log("Страница отрасовалась");
    // }, [posts]);
    useEffect(() => {
        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        );
    }, [posts]);
    
    function addPost(event){
        event.preventDefault();
        if(!title.trim() && !title.trim()) return;
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
    function deleteAllPosts() {
        const isConfirmed = window.confirm("Вы уверены, что хотите удалить ВСЕ публикации? Это действие нельзя отменить.");
        if (isConfirmed) {
            setPosts([]); 
        }
    }
    return(
        <section>
            <h1>Профиль</h1>
            <ProfileCard/>
            <div className="fead">
                <h2>Мои публикации</h2>
                <p>Всего публикаций {posts.length}</p>
                <form className="post-form" onSubmit={addPost}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(event)=> setTiile(event.target.value)} />
                <br />
                <textarea placeholder="Текст поста" value={text} onChange={(event)=> setText(event.target.value)}/>
                <br />
                <div class="post-buttons">
                    <button type="submit">Опубликовать</button>
                    <button class="clear_all_posts" type="button" onClick={deleteAllPosts}>Удалить все</button>
                </div>
            </form>
            {posts.length > 0 ? 

                (posts.map((post) => (
                    <Post key={post.id} author={post.author} title={post.title} text={post.text} id={post.id} avatar={post.avatar} onDelete={deletePost}  />
                ))) :

                <h2>Опубликуйте новый пост</h2>
                
            }
            
            </div>
        </section>
    )
}
export default Profile