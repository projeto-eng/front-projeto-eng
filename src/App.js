import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="content"> {/* Container para o conteúdo dinâmico */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
