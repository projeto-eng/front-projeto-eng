import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Info School</h1>
      <nav>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servico">Serviço</a>
        <a href="#por-que-nos">Por que nós</a>
        <a href="#equipe">Equipe</a>
        <a href="#login">
          <i className="fas fa-user"></i> Login
        </a>
      </nav>
    </header>
  );
}

export default Header;