
import {Link } from 'react-router-dom';
import './App.css';
import { sharedData } from './App';
import { useContext, useState } from 'react';
function Dashboard() {
  const[variable, setVariable] = useState(0);
  const username = useContext(sharedData);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  const visible = () => {
    var x = document.getElementById("d");
    if (variable===0) {
      x.style.visibility="hidden";
      setVariable(1);
    } else {
      x.style.visibility="visible";
      setVariable(0);
    }
  }
  return (
    <div>
      <div className="navigation" style={{ textAlign: "center" }}>
      <h3>Welcome {username}!!!!</h3>
      <p onClick={visible}>^</p>
      <input  id='d' className='class' type="button" value="Logout" onClick={logout}/>
        <h1>Dashboard ReactJS</h1>

        <nav>
          <ul className="navigation-list" type="none">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Registration">Registration</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
          </ul>
        </nav>
        
    </div> 
    </div>

  );
}

export default Dashboard;