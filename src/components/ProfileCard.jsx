import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [posts,setPosts] = useState( [
        {
            id: 1,
            title: "Title1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            author: "Tramp"

        },
        {
            id: 2,
            title: "Title2",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            author: "Z"


        },
        {
            id: 3,
            title: "Title3",
            text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            author: "Cock"

        },
        {
            id: 1,
            title: "Title4",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            author: "Devid"

        },
        {
            id: 1,
            title: "Title5",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            author: "Adolf"

        },
    ]);
    const [title,setTiile]=useState("");
    const[text,setText]=useState("")
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
    

    // const post = {
    //         id:1,
    //         title:"Title",
    //         text:"Text",
    //         author:"Daniil"

    //     }
    

    return (
        <section className="profile-card">
            <div className="profile">
                <div className="avatar">avatar</div>
                <div className="profile-info">
                    <h2>Name</h2>
                    <p>@nickname</p>
                </div>
            </div>
            <form className="post-form" onSubmit={addPost}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(event)=> setTiile(event.target.value)} />
                <textarea placeholder="Текст поста" value={text} onChange={(event)=> setText(event.target.value)}/>
                <button type="submit">Опубликовать</button>
            </form>

            {posts.map((post) => (
                <Post key={post.id} author={post.author} title={post.title} text={post.text} />
            ))}

            {/* <Post author="Viktor" title="Study React for frontend" likes={17} text="какой-то осмысленный текст" />
            <Post author="Viktor" title="Study React for frontend" likes={17} text="какой-то осмысленный текст" />
            <Post author="Viktor" title="Study React for frontend" likes={17} text="какой-то осмысленный текст" />  */}
        </section>


    )
}

export default ProfileCard;