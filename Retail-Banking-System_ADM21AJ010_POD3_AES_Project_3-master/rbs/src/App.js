import React from 'react';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import MainPage from './MainPage';
import Send from './Send';
import NavbarAfter from './NavbarAfter';
import Calculator from './components/calculator/Calculator';
import AccountDetails from './components/accountdetails/AccountDetails';
import TransactionSuccessPopUp from './components/transactionstatus/TransactionSuccess';
import CheckBal from './components/checkbalance/CheckBal';
//import Calc from './components/calculator/Calc.css';

function App() {
  // const title = "Retail Banking System";
  return (
    <Router>
    <div className="App">
      
      <div className="content">
        <Switch>
          {/* <Route exact path="/register" component={Register, Navbar} />
          <Route exact path="/login" component={Login,Navbar} />
          <Route exact path="/" component={Home,Navbar} />
          <Route exact path="/home" component={MainPage,Navbar} />
          <Route exact path="/send" component={Send,NavbarAfter} /> */}

          <Route exact path="/register">
            <Navbar></Navbar>
            <Register></Register>
          </Route>

          <Route exact path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Navbar></Navbar>
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <NavbarAfter></NavbarAfter>
            <MainPage></MainPage>
          </Route>

          <Route exact path="/send">
            <NavbarAfter></NavbarAfter>
            <Send></Send>
          </Route>

           <Route exact path="/calculator">
            <NavbarAfter></NavbarAfter>
            <Calculator></Calculator>
          </Route> 

          <Route exact path="/accountdetails">
            <NavbarAfter></NavbarAfter>
            <AccountDetails></AccountDetails>
          </Route> 

          <Route exact path="/transactionstatus">
            <NavbarAfter></NavbarAfter>
            <TransactionSuccessPopUp></TransactionSuccessPopUp>
          </Route> 

          <Route exact path="/checkbalance">
            <NavbarAfter></NavbarAfter>
            <CheckBal></CheckBal>
          </Route>


        </Switch>

       
      </div>
    </div>
    </Router>
  );
}

export default App;

