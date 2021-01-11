import React from 'react';
import { ListGroup,ListGroupItem} from 'reactstrap';
import{Link,NavLink} from "react-router-dom";



const Menus =()=>
{
    return(

<ListGroup>
<Link className="list-group-item list-group-item-action" tag="a"  to="/" action>Home</Link>
<Link className="list-group-item list-group-item-action" tag="a"   to="/add-course" action>Add Cource</Link>
<Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>View Cource</Link>
<Link className="list-group-item list-group-item-action" tag="a" to="/view-about" action>About</Link>
<Link className="list-group-item list-group-item-action" tag="a" to="/view-cont" action>Contact</Link>
</ListGroup>


    );
}


export default Menus;