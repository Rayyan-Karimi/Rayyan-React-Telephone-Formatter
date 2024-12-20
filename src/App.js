import "./App.css";
import TelephoneFormatter from "./TelephoneFormatter.js";

function Hero() {
  return (
    <div className="py-6 text-center shadow-lg w-full text-xl font-semibold">
      <h2>Telephone Formatter</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hero />
      <TelephoneFormatter />
    </div>
  );
}

export default App;
