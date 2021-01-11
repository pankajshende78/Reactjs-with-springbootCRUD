
import './App.css';
import React from "react";
import {Container,Row,Col } from 'reactstrap';
import  Header from "./components/Header";
import { ToastContainer, toast } from 'react-toastify';
import Course from "./components/Course";
import Menus from "./components/Menus";
import Home from "./components/Home";
import AllCourse from './components/AllCourse';
import AddCourse from './components/AddCourse';
import About from './components/About';
import contact from './components/contact';
import Details from './components/Details';
import{BrowserRouter as Router , Route} from "react-router-dom";

function App() {

  const btnHandle= ()=>
  toast.success("Done");

  
  return (
    <div >
    <ToastContainer />
     <Router>
  <Container>
  <Header />
 

  
  <Row>

  <Col md={4}>
  <Menus />
  </Col>
  <Col md={8}>

<Route path="/" component={ Home } exact />
<Route path="/add-course" component={ AddCourse } exact />
<Route path="/view-course" component={ AllCourse } exact />
<Route path="/view-about" component={ About } exact />
<Route path="/view-cont" component={ contact } exact />
<Route path="/update-book" component={ AddCourse } exact />
<Route path="/details-book" component={ Details } exact />

  </Col>

  </Row>
  
  
  </Container>

</Router>

</div>
  );
}

export default App;
