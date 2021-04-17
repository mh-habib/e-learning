import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddCourse from './components/Dashboard/AddCourse/AddCourse';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import Book from './components/Book/Book/Book';
import BookingList from './components/Book/BookingList/BookingList';
import Review from './components/Book/Review/Review';
import Login from './components/Login/Login';
import ContactMsgList from './components/Dashboard/ContactMsgList/ContactMsgList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/addCourse">
          <AddCourse></AddCourse>
        </Route>
        <Route path="/addAdmin">
          <AddAdmin></AddAdmin>
        </Route>
        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>
        <Route path="/book">
          <Book></Book>
        </Route>
        <Route path="/bookingList">
          <BookingList></BookingList>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/contactMessage">
          <ContactMsgList></ContactMsgList>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
