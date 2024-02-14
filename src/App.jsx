import './App.css';
import Body from './componets/Body';
import Bread from './componets/Bread';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
function App() {
  return (
    <div className="App">
      <Header/>
      <Bread/>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
