import BrowserRouter from "./Components/Routes/BrowserRouter";
import { useGlobalContext } from "./context";

function App() {
  const prova = useGlobalContext();
  console.log(prova);

  return <BrowserRouter />;
}

export default App;
