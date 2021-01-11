import {Form, FormGroup,Button,Label, Input, FormText,Container } from 'reactstrap';
import React, {useState,useEffect}from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import base_url from "./../api/bootapi";




const AddCourse =() =>
{


  const[course, setCourse]=useState({});


  const handleForm = (e)=>
  {
      
      postDatatoServer(course);
      e.preventDefault();
  };


  //creating function to post data to server
  
  const postDatatoServer =(data) =>
  {
      axios.post(`${base_url}/newbook`,data).then(
        (response) =>
        {
       
       
           toast.success("Course Added Successfully");
           
        },(error) =>
        {
           toast.error("Error ! Something went wroung");
          
        }
      )
  }



return(
<Form onSubmit={handleForm}>
<h1 className= " text-center my-3 ">Fill Course details</h1>
  <FormGroup>
        <Label for="UserId">BookId</Label>
        <Input type="text" 
        name="id" 
        id="UserId" 
        placeholder="Enter Here" 
        onChange={(e)=>
        {
          setCourse({...course, id: e.target.value });
        }} />

      </FormGroup>

      <FormGroup>
        <Label for="title">title</Label>
        <Input type="text" 
        name="title" 
        id="title" 
        placeholder="Enter title Here" 
         onChange={(e)=>
        {
          setCourse({...course, title: e.target.value });
        }}
      />
      </FormGroup>
      <FormGroup>
        <Label for="discription">discription</Label>
        <Input type="textarea" 
        id="discription" 
        placeholder="Enter discription Here" 
        style={{height:150}}
         onChange={(e)=>
        {
          setCourse({...course, discription: e.target.value });
        }}
         />
      </FormGroup>
      <Container className="text-center my-2">
      <Button type="submit" color="primary">Add Course</Button>
      <Button type="reset" onClick={(e) =>{ setCourse({});}} color="danger ml-2">Clear</Button>
      </Container>
</Form>

);

};
export default AddCourse;







