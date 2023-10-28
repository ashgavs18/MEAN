import React, { useState } from "react";
import "./App.css";
import { createContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Home from "./Home";

import ContactUs from "./ContactUs";

import AboutUs from "./AboutUs";

import Registration from "./Registration";

import Dashboard from "./Dashboard";
export const sharedData = createContext();
function App() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    username === "admin" && password === "admin"? setIsLogin(true): username === "Aakash" && password === "12345"? setIsLogin(true): username === "Ace" && password === "12345"? setIsLogin(true)
      : alert("Invalid Credentials");
  };

  if (!isLogin) {
    return (
      <div>
        <h1>Login Page</h1>

        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>

          <br />

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <br />

          <button className='class' type="submit">Login</button>
        </form>
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <div>
        <sharedData.Provider value={username}>
              <Dashboard />
            </sharedData.Provider>

          <center>
            <fieldset>
              <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Home" element={<Home />} />

                <Route path="/ContactUs" element={<ContactUs />} />

                <Route path="/AboutUs" element={<AboutUs />} />

                <Route path="/Registration" element={<Registration />} />
              </Routes>
            </fieldset>
            
          </center>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
