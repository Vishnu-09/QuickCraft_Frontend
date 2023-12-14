// import React from 'react'
// import { Footer, Navbar } from "../components";
// import { Link } from 'react-router-dom';
// const Register = () => {
//     function fun () {
//         alert("Register Successfull");
//       }
//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div class="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form>
//                             <div class="form my-3">
//                                 <label for="Name">Full Name</label>
//                                 <input
//                                     type="email"
//                                     class="form-control"
//                                     id="Name"
//                                     placeholder="Enter Your Name"
//                                 />
//                             </div>
//                             <div class="form my-3">
//                                 <label for="Email">Email address</label>
//                                 <input
//                                     type="email"
//                                     class="form-control"
//                                     id="Email"
//                                     placeholder="name@example.com"
//                                 />
//                             </div>
//                             <div class="form  my-3">
//                                 <label for="Password">Password</label>
//                                 <input
//                                     type="password"
//                                     class="form-control"
//                                     id="Password"
//                                     placeholder="Password"
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
//                             </div>
//                             <div className="text-center">
//                                 <button onClick={fun} class="my-2 mx-auto btn btn-dark" type="submit" >
//                                     Register
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Register
import React, { useState } from 'react';
import axios from 'axios';
import { Footer, Navbar } from "../components";
import "./Register.css"
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [loginResult, setLoginResult] = useState("");
  const [dashboardData, setDashboardData] = useState({});
  const [showDashboard, setShowDashboard] = useState(false);
  const [password, setPassword] = useState("");

  const handleAction = () => {
    if (isLogin) {
      handleLogin();
    } else {
      handlePost();
    }
  };

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { name, email,password })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
          setPassword("");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert(`${error}`);
      });
  }

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', { name, email })
      .then((response) => {
        const result = response.data;
        setLoginResult(result.success ? "Login successful" : "Login unsuccessful");
        if (result.success) {
          // If login is successful, fetch dashboard data
          fetchDashboardData();
          setShowDashboard(true);
        }
      })
      .catch((error) => {
        console.error("Login request error:", error);
        alert("Something went wrong during login.");
      });
  }

  const fetchDashboardData = () => {
    axios.get(`http://localhost:5000/dashboard?name=${name}`)
      .then((response) => {
        const data = response.data;
        setDashboardData(data);
      })
      .catch((error) => {
        console.error("Dashboard data request error:", error);
        alert("Failed to fetch dashboard data.");
      });
  }

  return (
    <>
    <body>
        <Navbar/>
    <div className="cont">
      {showDashboard ? (
        <div>
          <h1>Welcome to Your Dashboard, {name}!</h1>
          <p>Dashboard Data:</p>
          <ul>
            {Object.entries(dashboardData).map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="container my-3 py-3">
        <div>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <hr/>
          <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            
          <form>
          <div class="form my-3">
          <label for="Name">Name:</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(f) => setName(f.target.value)}
            />
            <br/><br/>
            <label for="Email">Email:</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br/><br/>
            <label for="Password">Password:</label>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(v) => setPassword(v.target.value)}
              />
              </div>
            <br />
            <br />
            <button type="button" onClick={handleAction}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <br />
            <br />
            <p>{loginResult}</p>
            
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
          </form>
          </div>
          </div>
        </div>
        </div>
      )}
    </div>
    
    <Footer className="foot"/>
    </body>
    </>
  );
}

export default App;
