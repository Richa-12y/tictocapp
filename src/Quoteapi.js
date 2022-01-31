import React from 'react';
import axios from 'axios';

 class Quoteapi extends React.Component {
    state ={loading:true, 
    data:[]}

    componentDidUpdate(){
        axios.get("https://type.fit/api/quotes")  
        
        .then((res =>{

            this.setState({loading:false,data:res.data})
        }))
         .catch((err =>{
             console.log("error")
         }))
}
  render() {
       if(this.state.loading)
       return(
           <div>
               <h1>Loading</h1>
           </div>
       )
       else
       return this.state.data.map((d)=>{
           return<div>{d.text} by {d.authore}</div>
       })

  }
}

export default Quoteapi;

