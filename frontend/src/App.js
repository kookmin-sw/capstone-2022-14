import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Main from './pages/Main';
import AirPods from './pages/Main/ProductList/airPods';
import Header from './components/header';
import Footer from './components/footer';
import Mac from './pages/Main/ProductList/mac';
import MacBook from './pages/Main/ProductList/macBook';
import Iphone from './pages/Main/ProductList/iphone';
import Ipad from './pages/Main/ProductList/ipad';
import AppleWatch from './pages/Main/ProductList/appleWatch';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="mac" element={<Mac />} />
            <Route path="macbook" element={<MacBook />} />
            <Route path="iphone" element={<Iphone />} />
            <Route path="ipad" element={<Ipad />} />
            <Route path="applewatch" element={<AppleWatch />} />
            <Route path="airpods" element={<AirPods />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
