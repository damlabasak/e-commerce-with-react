import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/navbar/Navbar';
import PageContainer from './containers/PageContainer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cart from './pages/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="font-mono">
      <PageContainer>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:categoryNameForUrl/:productNameForUrl/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
