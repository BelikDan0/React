import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"

const PostsContext=createContext();
export function PostsProvider({children}){
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

     useEffect(() => {
        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        );
    }, [posts]);

    return(
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    )
}
export function usePosts(){
    return useContext(PostsContext);
}
