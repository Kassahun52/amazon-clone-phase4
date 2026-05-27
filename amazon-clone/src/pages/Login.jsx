import React from "react";

function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Logo"
      />
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" placeholder="Enter your email" />
          <h5>Password</h5>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Terms of Service.
        </p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;