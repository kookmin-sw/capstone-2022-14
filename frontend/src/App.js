import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Main from './pages/Main';
import ProductPriceChart from './pages/ProductPriceChart';
import HotProducts from './pages/HotProducts';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Introduction />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:keyword" element={<Main />} />
          <Route exact path="/pricechart" element={<ProductPriceChart />} />
          <Route exact path="/hotproducts" element={<HotProducts />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
