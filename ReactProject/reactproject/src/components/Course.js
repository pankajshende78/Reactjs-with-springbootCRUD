import React  from 'react';
import base_url from "./../api/bootapi";
import { Card, CardBody, Button, CardTitle, CardText,Container } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from "axios";
import AddCourse from "./AddCourse";





const Course = ({ course ,update }) => {




  const deleteCourse =(id)=>{
    axios.delete(`${base_url}/deletebook/${id}`).then
    (
  (response)=>{
  toast.success("course deleted");
  update();
  },(eroor)=>
  {
  toast.error("Somethn=ing went woring");
  }

    )
  }



  return (
    <div >
      <Card>
        
        <CardBody  className="text-center"> 
       
        
          <CardTitle tag="h5">{course.title}</CardTitle>

   <Container className="text-left">
        <CardText tag="h4">{course.id} )</CardText></Container><CardText>{course.discription}</CardText>

         <Container className="text-center">
         <Button color="danger" onClick={()=>{
           deleteCourse(course.id);
          }} >Delete</Button>{' '}
          <Button  color="warning"
          href="/update-book" >update</Button>
          </Container>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Course;