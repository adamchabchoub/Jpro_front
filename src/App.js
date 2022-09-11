import './App.css';
import Main from './Pages/Home/Home';
import Contact from './Pages/contact/Form.Contact';
import Client from './Pages/contact-client/Form.Client';
import Revendeur from './Pages/contact-revendeur/Form.Revendeur';
import NotFoundView from './Pages/404NotFound/NotFound';
import Logiciel from './Pages/Logiciel/Logiciel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>

        <Route path="/" exact component={Main} />
        <Route path="/client" component={Client} />
        <Route path="/contact" component={Contact} />
        <Route path="/revendeur" component={Revendeur} />
        <Route path="/test" component={Logiciel} />
        <Route path="/*" component={NotFoundView} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
