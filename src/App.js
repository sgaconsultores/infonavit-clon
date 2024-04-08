import logo from "./logo.svg";
import "./App.css";
import { hotjar } from "react-hotjar";

hotjar.initialize({ id: "4936466" });
function openSurvey() {
  console.log("opening survey");
  hotjar.event("INFONAVIT_CLICK");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn.worldvectorlogo.com/logos/infonavit.svg"
          className="App-logo"
          alt="logo"
        />
        <p>Ambiente de pruebas clon INFONAVIT con GTAG y HOTJAR</p>
        <div>ID DE GTAG: G-N3W091Q5F6</div>
        <div>ID DE HOTJAR: 4936466</div>
        <button class="button-test" onClick={openSurvey}></button>
      </header>
    </div>
  );
}

export default App;
