import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Password:", user.password);
console.log("Confirm Password:", user.confirmPassword);
  if (user.password !== user.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:3002/signup",
      {
        username: user.username,
        email: user.email,
        password: user.password,
      },
      {
        withCredentials: true,
      }
    );

    alert(res.data.message);

    if (res.data.success) {
      navigate("/login");
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
    <div className="signup-page">

      <div className="signup-left">

        <img
          src="/media/images/Signup1.svg"
          alt="TradeNest Signup"
        />

      </div>

      <div className="signup-right">

        <div className="signup-card">

          <h1>Create your TradeNest Account</h1>

          <p>
            Join thousands of investors and traders.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              required
            />

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

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Create Account
            </button>

          </form>

          <div className="login-link">
            Already have an account?
            <span onClick={() => navigate("/login")}>
              {" "}Login
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;