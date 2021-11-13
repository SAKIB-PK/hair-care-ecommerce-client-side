import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import MyOrder from './Component/MyOrder/MyOrder';
import Navbar from './Component/Navbar/Navbar';
import Purchase from './Component/Purchase/Purchase';
import Registration from './Component/Registration/Registration';
import Services from './Component/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Context/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/register'>
            <Registration/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute exact path="/purchase/:id">
            <Purchase/>
          </PrivateRoute>
          <PrivateRoute path='/my-order'>
            <MyOrder/>
          </PrivateRoute>
          <Route path='/explore'>
            <Services/>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
