// src/Login.js
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Login
  const handleLogin = async () => {

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log('login failed', error.message);
    }
    
  };

  return (
    <>
      <div className="login_cover">
        <div className="container">
          <div className="login_box">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Login</h2>
              </div>
              <div className="card-body">

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="card-action">
                <button className="w-100 btn btn-success mb-10" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Login;
