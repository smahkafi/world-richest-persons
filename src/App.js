import './App.css';
import Header from './Components/Header/Header'
import Persons from './Components/Persons/Persons'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Persons></Persons>
      <Footer className="mt-5"></Footer>
    </div>
  );
}

export default App;
