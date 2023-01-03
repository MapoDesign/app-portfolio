import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BrowserRouter from "./Components/Routes/BrowserRouter";

function App() {
  return (
    <div
      className="App"
      data-spy="scroll"
      data-target=".navbar"
      data-offset="51"
    >
      <BrowserRouter />
    </div>
  );
}

export default App;
