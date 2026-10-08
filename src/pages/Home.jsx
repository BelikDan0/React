import { useState } from "react";
import Post from "../components/Post";

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Title1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Tramp",
    },
    {
      id: 2,
      title: "Title2",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      author: "Z",
      avatar: "/images/Без названия (1).jfif",
    },
    {
      id: 3,
      title: "Title3",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
      author: "Cock",
      avatar: "/images/images.jfif",
    },
    {
      id: 4,
      title: "Title4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Devid",
      avatar: "/images/images.jfif",
    },
    {
      id: 5,
      title: "Title5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Adolf",
      avatar: "/images/images.jfif",
    },
  ]);

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <section>
      <h1>Главная</h1>
      <div className="fead">
        <h2>Лента</h2>
        {posts.map((post) => (
          <Post
            key={post.id}
            author={post.author}
            title={post.title}
            text={post.text}
            id={post.id}
            avatar={post.avatar}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;