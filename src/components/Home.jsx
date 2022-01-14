import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './HomeStyle.css';

const Home = () => {
  return (
    <div class="container">
      <div class="card-content">
      <Card >
        <Card.Body>
          <Card.Title>Hey!</Card.Title>
          <Card.Text>
            Lets get you updated..
          </Card.Text>
            <Link style={{"text-decoration" : "none"}} to="/list">Click to view List</Link>    
            
        </Card.Body>
      </Card>
     <div class="bouncingball"></div>
      </div>
    </div>
  );
};

export default Home;
