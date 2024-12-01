import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import ServerService from "./services/ServerService";

const server = new ServerService()
server.get('/api/configuracoes').then(
  (response) => {
    console.log(response)
  }
)

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
