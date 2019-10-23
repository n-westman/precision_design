import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export const SmallCase = (props) => {
  
    let history = useHistory();
  
    function handleClick() {
      history.push(props.location);
    }
  
  return(
    <Card className="smallCase" style={{ backgroundColor: `${props.backgroundColor}` }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text> {props.message}</Card.Text>
      <Button onClick={handleClick} variant="primary">Read More</Button>
    </Card.Body>
  </Card>
  );
  
}