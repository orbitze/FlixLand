import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;