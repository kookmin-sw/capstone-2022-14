import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Main from './pages/Main';
import Search from './pages/Search';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Iphone from './pages/Products/Iphone';
import Ipad from './pages/Products/Ipad';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
