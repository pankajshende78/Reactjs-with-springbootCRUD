import base_url from "./../api/bootapi";
import Course from "./Course";
import { toast } from 'react-toastify';
import axios from "axios";
import React, {useState,useEffect}from 'react';



 const AllCourse = () => {



//   useEffect(() => {
//     document.title="view-Book";
   
//   }, []);


  const getAllCourseFromServer = () => {

    axios.get(`${base_url}/getbook`).then(
        (response) => {
           
          setCourses(response.data);
          console.log(response);
          toast.success("Courses has been loaded");
        },
        (error) =>
        {
             toast.error("Somthing went Wrong");
           
        }
    )
  };



    useEffect(()=>{
        getAllCourseFromServer();
        },[]);
    
    
    const[courses,setCourses]=useState([]);



    const updateCourses=(id)=>
    {
      setCourses(courses.filter((c)=> c.id != id ));
    };



    return(
      
        <div>

       <h1>All Courses</h1>
      {courses.length > 0 
      ? courses.map((item) => <Course key={item.id} course={item}  update={updateCourses}/>) : "No Courses" }


        </div>




    );
};
    export default AllCourse;

