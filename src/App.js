import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
