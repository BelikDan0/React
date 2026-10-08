import Actions from "./Actions";

function Post({author, title, text, onDelete, id, avatar, likes=0,reposts=0}) {
    return (
        <article className="post">
            
                {avatar!=null ? (
                    <div className="div-avatar">
                        <div className="avatar">
                        <img className="bird-avatar" src={avatar} alt="О проекте" />
                    </div>
                        <p className="post-author">{author}</p> 
                    </div>
                    
        
                ) :(
                    <div className="div-avatar">
                        <div className="avatar">
                        <img className="bird-avatar" src="/images/images.jfif" alt="О проекте" />
                    </div>
                        <p className="post-author">{author}</p> 
                    </div>
                    

                ) }
            
            <h2>{title}</h2>
            <p className="post-text">{text}</p>
            
            

            <Actions />

            {onDelete &&(

                <button className="delete-button" onClick={()=> onDelete(id)}>
                Удалить
                </button>
            )}
        </article>
    )
}

export default Post;