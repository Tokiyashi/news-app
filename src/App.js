import './index.css';
import {useState} from "react";
import Post from "./Components/Post/Post";
import Header from "./Components/UI/Header/Header";
import UserProfile from "./Components/UI/UserProfile/UserProfile";

function App() {
    const [posts, setPost] = useState([
        {name: "Мазила", header:'Прикол', content: 'РЕБЯТА НОЖ ВЫПАЛ! ЧЕСТНО Я НЕ ШУЧУ!'},
        {name: "Вася", header:'какой-то заголовок', content: 'РЕБЯТА НОЖ ВЫПАЛ! ЧЕСТНО Я НЕ ШУЧУ!'},
    ]);



    const postList = posts.map((item, index) =>
    <Post key={index} header={item.header} author={item.name} content={item.content} > </Post>);

  return (
      <main>
          <Header/>
          <UserProfile/>
          {postList}
      </main>
  );
}

export default App;
