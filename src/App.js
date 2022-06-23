import './index.css';
import {useState} from "react";
import Post from "./Components/Post/Post";
import Header from "./Components/UI/Header/Header";
import test from './img/test avatar.jpg'
import UserProfile from "./Components/UI/UserProfile/UserProfile";

function App() {
    const [posts, setPost] = useState([
        {name: "Мазила", content: 'РЕБЯТА НОЖ ВЫПАЛ! ЧЕСТНО Я НЕ ШУЧУ'},
        {name: "Вася2", content: 'Контент2'},
    ]);

    const postList = posts.map((item, index) =>
    <Post key={index} author={item.name} content={item.content} > </Post>
    );

  return (
      <main>
          <Header/>
          <UserProfile/>

          {postList}
      </main>
  );
}

export default App;
