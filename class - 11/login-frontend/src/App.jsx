import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);

    const resp = await fetch("http://localhost:8000/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseMsg = await resp.json();

    if (resp.status === 201) {
      setMessage(responseMsg.message);
    } else {
      setMessage(responseMsg.message);
    }
  };

  return (
    <>
      {message && <h2>{message}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <br />

        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
