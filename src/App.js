import React from "react";
import Register from "./pages/register/register";
import Login from "./pages/Login/login";
import CreatePIN from "./pages/register/createPIN";
import ConfirmLogin from "./pages/Login/confirmLogin";
import Header from "./components/header";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <CreatePIN /> */}
      {/* <ConfirmLogin /> */}
      {/* <Header /> */}
      <Dashboard />
    </div>
  );
}

export default App;
