import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  BubblesReducer,
  initialState
} from "./components/reducers/bubbleReducers";
import { BubbleContext } from "./components/context/bubbleContext";

import Login from "./components/Login";
import Logout from "./components/LogOut";
import PrivateRoute from "./PrivateRoute";
import BubblePage from "./components/BubblePage";
import { getColors } from "./components/util/api";
import "./styles.scss";

function App() {
  const [bubbleState, dispatch] = useReducer(BubblesReducer, initialState);
  const loggedIn = localStorage.getItem("MTN-token");

  useEffect(() => {
    getColors(dispatch);
  }, [dispatch, loggedIn]);

  return (
    <BubbleContext.Provider value={{ bubbleState, dispatch }}>
      <Router>
        <div className='App'>
          <Route exact path='/' component={Login} />
          {loggedIn && <Link to='/logout'>Log Out</Link>}
          <PrivateRoute path='/logout' component={Logout} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
          <PrivateRoute path='/bubblepage' component={BubblePage} />
        </div>
      </Router>
    </BubbleContext.Provider>
  );
}

export default App;
