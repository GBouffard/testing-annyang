import './App.css';
import annyang from './Annyang'

const App = () => {
  return !annyang ? <div className="App">Speech Recognition is not supported</div> : <div className="App">Testing Annyang</div>
}

export default App;
