import "./App.css";
import TodoList from "./components/TodoList";
import MenuBar from "./components/MenuBar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const token = localStorage.getItem("token");
   const [isLogin, setIsLogedIn] = useState(false)
  return (
    <div className="App">
      <MenuBar setIsLogedIn={setIsLogedIn} isLogin={isLogin}/>
      {token ? (
        <TodoList setIsLogedIn={setIsLogedIn} isLogin={isLogin}/>
      ) : (
        <h1>Log In to start keeping track of your tasks</h1>
      )}
      <Footer />
    </div>
  );
}

export default App;
