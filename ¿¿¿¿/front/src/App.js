
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Comp/Layout/Header';
import Nav from './Comp/Layout/Nav';
import Footer from './Comp/Layout/Footer';

import ContactPage from "./Pag/contactPage";
import IndexPage from "./Pag/indexPage";
import diseñadoresPage from "./Pag/diseñadoresPage";
import newspage from "./Pag/newsPage";



function App() {
  return (
    <div classname = "App">
    <Router>
      <Header></Header>
      <Nav></Nav>
<Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/diseñadoresPage" exact component={diseñadoresPage} />
      <Route path="/noticiasPage" exact component={newspage} />
      <Route path="/contactoPage" exact component={ContactPage} />
</Switch>
  
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;