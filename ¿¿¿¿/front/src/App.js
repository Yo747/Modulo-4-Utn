
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Comp/Layout/Header';
import Nav from './Comp/Layout/Nav';
import Footer from './Comp/Layout/Footer';

import ContactPage from "./Pag/contactPage";
import IndexPage from "./Pag/indexPage";
import diseñadoresPage from "./Pag/diseñadoresPage";
import newspage from "./Pag/newsPage";
import ServidorPage from "./Pag/servidorPage";
import FotosPage from "./Pag/fotosPage";



function App() {
  return (
    <div classname = "App">
    <Router>
      <Header></Header>
      <Nav></Nav>
<Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/Diseñadores" exact component={diseñadoresPage} />
      <Route path="/News" exact component={newspage} />
      <Route path="/Contact" exact component={ContactPage} />
      <Route path = "/Servidor" exact component= {ServidorPage} />
      <Route path = "/Fotos" exact component= {FotosPage} />
      </Switch>
  
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;