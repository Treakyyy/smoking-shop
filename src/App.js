import './App.css';
import Notification from './UI/Notification/Notification';
import SliderComnonent from './UI/Slider/SliderComponent';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Menu from './components/Menu/Menu';
import Product from './components/Product/Product';
import Warning from './components/Warning/Warning';

function App() {
  return (
    <div className="App">
      <Notification />
      <Header/>
      <Menu />
      <SliderComnonent />
      <Product/>
      <AboutUs />
      <Blog />
      <Help />
      <Footer />
      <Warning />
    </div>
  );
}

export default App;
