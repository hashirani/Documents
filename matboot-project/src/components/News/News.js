import React from 'react';
import { Button, Card } from 'react-bootstrap';

const News = (props) => {
  const {name,auther,title,description,content}=props.article;
    return (
        
    <Card>
      <Card.Header as='h5'>{content}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
        
    );
};

export default News;