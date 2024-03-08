import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
