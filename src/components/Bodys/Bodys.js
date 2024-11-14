// Body.js
import SearchBar from './SearchBar/SearchBar';

function Body() {
  const testedados = [
    { name: 'Escola A', city: 'Cidade X', state: 'Estado Y', enemScore: 850, evaluation: 4.5 },
    { name: 'Faculdade B', city: 'Cidade Y', state: 'Estado Z', enemScore: 780, evaluation: 3.8 },
    { name: 'Instituto C', city: 'Cidade Z', state: 'Estado Z', enemScore: 920, evaluation: 4.9 }
  ];
  
  const cidades = {
    'Estado Y': ['Cidade X', 'Cidade A'],
    'Estado Z': ['Cidade Y', 'Cidade Z', 'Cidade B'],
  };

  const estados = Object.keys(cidades);

  return (
    <div className="search">
      <h1>Barra de Pesquisa</h1>
      <SearchBar data={testedados} cities={cidades} states={estados}/>
    </div>
  );
}

export default Body;