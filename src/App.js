import logo from './andrita_logo.svg';
import { Container } from "./components/styles/Container.styled";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar} from "react-bootstrap";

const App = () => {
  return (
    <>
     <Navbar bg="danger" variant="dark">
        <Navbar.Brand>
            <img src={logo} alt=""  />
        </Navbar.Brand>
     </Navbar>
       <Container>
          <h1>Hello App</h1>
      </Container>
    </>
  )
}

export default App;
