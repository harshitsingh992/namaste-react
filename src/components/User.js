import React from "react";

import {useState} from "react";

class User extends React.Component {
    
  constructor(props)
  {
    super(props);

    this.state={
        userinfo:{
          name:"Dummy" 
        }
    }
    
  }



    render(){
        const {name,location}=this.props;
       
        
    return(
        <div>
            <h1>name: {name}</h1>
            <h2>location: {location}</h2>
           
        </div>
    )
}
}

export default User;