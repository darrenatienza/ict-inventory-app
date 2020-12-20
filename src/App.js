import logo from "./logo.svg";
import "./App.css";
import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { Container } from "@material-ui/core";
function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Login />
      </Container>
    </div>
  );
}

export default App;
