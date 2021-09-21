import './App.css';
import Header from './Common/Header';
import SimpleForm from './Forms/simpleForm';
import ProductsList from './ProductPage/productsList';
import ProductDetails from './ProductPage/productDetails';
import Sidebar from './Common/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
       <Header />
       <div className="main">
        <Sidebar />
        <div className="content">
        <Switch>
          <Route path="/" exact component={SimpleForm} />
          <Route path="/products" exact component={ProductsList} />
          <Route path="/products/:id" exact component={ProductDetails} />
        {/* <SimpleForm /> */}
        </Switch>
        </div>
       </div>
    </div>
    </Router>
  );
}

export default App;
