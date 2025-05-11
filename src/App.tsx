import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Main from './pages/Main';
import BasicForm from './pages/BasicForm';
import BasicForm2 from './pages/BasicForm2';
import StartProject from './pages/StartProject';
import About from './pages/About';

function App() {
    return (
        <div className="wrap">
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/start-project" element={<StartProject />} />
                <Route path="/testemail" element={<BasicForm />} />
                <Route path="/testemail2" element={<BasicForm2 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
