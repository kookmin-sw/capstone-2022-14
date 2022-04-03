import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Main from './pages/Main';
import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:keyword" element={<Main />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
