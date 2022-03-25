import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Search from './components/pages/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search/:keyword" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
