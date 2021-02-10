import './App.css';
import Main from './Components/Main';
import Contact from './Components/Form.Contact';
import Client from './Components/Form.Client';
import Revendeur from './Components/Form.Revendeur';
import NotFoundView from './Components/NotFoundView';
import Logiciel from './Components/Logiciel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/client" component={Client} />
        <Route path="/contact" component={Contact} />
        <Route path="/revendeur" component={Revendeur} />
        <Route path="/test" component={Logiciel} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </Router>
  );
}

export default App;
