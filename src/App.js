import Card from "./components/Card";
import "./App.css";
import JsonData from "./JSONdata.json";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Оцени любимых супергероев!</h1>
      <div id="card-container">
        {JsonData.map((hero) => (
          <Card
            key={hero.name}
            name={hero.name}
            universe={hero.universe}
            alterego={hero.alterego}
            occupation={hero.occupation}
            friends={hero.friends}
            superpowers={hero.superpowers}
            url={hero.url}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
