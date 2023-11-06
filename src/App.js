import './App.sass';
import Header from './containers/Header';
import AppRouter from './AppRouter';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;