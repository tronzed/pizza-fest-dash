// src/Login.js
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Signup
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };


  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div className="login_cover">
            <div className="container">
              <div className="login_box">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">Signup</h2>
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
                    <button className="w-100 btn btn-danger" onClick={handleSignup}>Signup</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>

      )}
    </div>
  );
}

export default SignUp;
