import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Header/NavBar/NavBar';
import Routes from './Components/Routes/BrowserRouter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
