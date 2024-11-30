import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Bodys/body";
import { Outlet } from "react-router-dom"; // Importa o Outlet
//import Cadastro from "./components/Cadastro/Cadastro";
//import Login from './components/Login/Login';

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
