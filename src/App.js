import './index.css';
import {useState} from "react";
import Post from "./Components/Post/Post";
import Header from "./Components/UI/Header";

function App() {
    const [posts, setPost] = useState([
        {name: "Вася", content: 'Контент'},
        {name: "Вася2", content: 'Контент2'},
    ]);

    const postList = posts.map((item) =>
    <Post author={item.name} content={item.content} > </Post>
    );

  return (
      <main>
          <Header/>
          {postList}
      </main>
  );
}

export default App;
