import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import MyOrder from './Component/MyOrder/MyOrder';
import Navbar from './Component/Navbar/Navbar';
import CancelPayment from './Component/Pay/CancelPayment';
import Checkout from './Component/Pay/Checkout';
import FailedPayment from './Component/Pay/FailedPayment';
import SuccessPayment from './Component/Pay/Success_Payment';
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
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
          {/* Payment status page */}
          <Route path="/payment-success">
            <SuccessPayment/>
          </Route>
          <Route path="/payment-cancel">
            <CancelPayment/>
          </Route>
          <Route path="/payment-failed">
            <FailedPayment/>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
