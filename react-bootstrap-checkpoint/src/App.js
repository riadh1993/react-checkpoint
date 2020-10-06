import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mb-4">Welcome to My new page</h1>
        <Form>
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label>Email adress</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="**********"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" className="mb-2" variant="secondary">
            Login
          </Button>
        </Form>
        <Card className="mb-3" style={{ color: "black" }}>
          <Card.Img src="http://www.picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>My card</Card.Title>
            <Card.Text>Let's discover some more cards</Card.Text>
            <Button variant="success">Learn more</Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
