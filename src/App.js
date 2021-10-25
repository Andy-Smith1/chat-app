import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import "./App.css";
import Nav from "./Components/Nav";
import Users from "./Components/Users";
import Chat from "./Components/Chat";
import NewMessage from "./Components/NewMessage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Nav />
        <Users />
        <Chat />
        <NewMessage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
