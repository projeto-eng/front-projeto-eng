import "./App.css";
import SearchBar from "./components/body/SearchBar";
import Header from "./components/Header/Header";

function App() {
  const testedados = [
    'Apple',
    'Banana',
    'Orange'
  ];
  return (
    <div className="page">
      <Header />
      <body>
        <h1>Barra de Pesquisa</h1>
        <SearchBar data={testedados}/>
      </body>
    </div>
  );
}

export default App;
