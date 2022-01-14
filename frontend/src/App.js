import './App.css';
import Navbar from './components/Navbar';
import PaginaCarrito from './components/PaginaCarrito';
import Products from './components/Products'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/Signin';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/carrito">
            <PaginaCarrito />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
