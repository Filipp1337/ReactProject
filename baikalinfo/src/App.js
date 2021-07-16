import './App.css';
import Header from './Components/Header/Header';
import Page1 from './Components/Content/Page1'
import Page2 from './Components/ContentPage2/Page2'
import Page3 from './Components/ContentPage3/Page3';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Page4 from './Components/ContentPage4/Page4';
import Page5 from './Components/ContentPage5/Page5';

function App() {
  return (
    <BrowserRouter>
      <div className="backgroung">
        <Header />
        <div className="App">
          <Route path='/page2' component = {Page2} />
          <Route path = '/page1' component = {Page1} />
          <Route path = '/page3' component = {Page3} />
          <Route path = '/page4' component = {Page4} />
          <Route path = '/page5' component = {Page5} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
