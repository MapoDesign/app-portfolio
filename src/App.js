import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrowserRouter from './Components/Routes/BrowserRouter';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter basename = 'https://mapodesign-portfolio.netlify.app'/>
    </div>
  );
}

export default App;
