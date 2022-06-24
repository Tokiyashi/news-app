import './index.css';
import Header from "./Components/UI/Header/Header";
import UserProfile from "./Components/UI/UserProfile/UserProfile";
import PostList from "./Components/PostList/PostList";

function App() {
  return (
    <>
        <Header/>
        <main>
            <UserProfile/>
            <PostList/>
        </main>
    </>
  );
}

export default App;
