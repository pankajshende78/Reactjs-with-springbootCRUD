import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="">Book Management</h1>
        <p className="lead">This is a simple Book Crud Application, we can add Read update delete book here</p>
        <hr className="my-1" />
        
        <p className="text-center">
          <Button href="/details-book" color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;