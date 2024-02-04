import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Container, Nav,Navbar,NavDropdown,Card,Button} from 'react-bootstrap';

{/*  provide the first name as a variable*/ }

const firstName = prompt("type your first name");

function App() {
  return (
    <div className="App">
   <h1>This is available at a 20% discount</h1>
    {/* Create a card that contains all components created using react-bootstrap */ }

     <Card style={{ width: '18rem' }}>
     <Image/>
      <Card.Body>
        <Card.Title> <Name/></Card.Title>
        <Card.Text> <Description/> </Card.Text>
        <Card.Text> <Price/>  </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    
    {/*  Display a message below the card that says Hello if the name is provided , and hello there if it's not */ }

    <h1>  {firstName ? "Hello "+ firstName: "Hello, there!"} </h1>

   { /*Display an image if the first name is provided */}
   
    <h1>  {firstName ? <img src='./pic.jpg'/>: ""} </h1>
    
    

    </div>
  );
}

export default App;
