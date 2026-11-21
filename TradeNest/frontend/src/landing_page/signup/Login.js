import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/login",
        user,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        alert("Login Successful");

        // Save JWT token if you return it
        localStorage.setItem("token", res.data.token);

        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);

      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Cannot connect to backend");
      }
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <img
          src="/media/images/Signup1.svg"
          alt="TradeNest"
        />
      </div>

      <div className="login-right">

        <div className="login-card">

          <h1>Welcome Back 👋</h1>

          <p>Login to your TradeNest account</p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

          <div className="signup-link">
            Don't have an account?
            <span onClick={() => navigate("/signup")}>
              {" "}Create Account
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;