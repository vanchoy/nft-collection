import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import SoMe from '../components/SoMe';
import Footer from '../components/Footer';

import Routing from './Routing';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routing />
      <SoMe />
      <Footer />
    </Router>
  );
};

export default App;
