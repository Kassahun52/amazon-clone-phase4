// import React from "react";

// function Login() {
//   return (
//     <div className="login">
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
//         alt="Amazon Logo"
//       />
//       <div className="login__container">
//         <h1>Sign In</h1>
//         <form>
//           <h5>E-mail</h5>
//           <input type="email" placeholder="Enter your email" />
//           <h5>Password</h5>
//           <input type="password" placeholder="Enter your password" />
//           <button type="submit" className="login__signInButton">
//             Sign In
//           </button>
//         </form>
//         <p>
//           By signing in you agree to Amazon's Terms of Service.
//         </p>
//         <button className="login__registerButton">
//           Create your Amazon Account
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error!");
    }
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Logo"
      />
      <div className="login__container">
        <h1>Sign In</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <h5>E-mail</h5>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>By signing in you agree to Amazon's Terms of Service.</p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;