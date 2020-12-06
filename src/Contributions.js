import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Contributions = (props) => {
  const [hasError, setErrors] = useState(false);
  const [contributionsREF, setContributions] = useState([]);
 

  useEffect(() => {
    async function fetchData() {
      const loc = "http://localhost:5000/contributions/" + props.location.contrib.state + "/" + props.location.contrib.position + "/" + props.location.contrib.name
      const res = await fetch(loc);
      res
        .json()
        .then(res => setContributions(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[]);




  return (
   <>
   {contributionsREF.map(contribution => {
     return(
       <ul>
           <li> {props.location.contrib.name} recieved {contribution.amount}</li>
           <li>From {contribution.name}</li>
           <li>Which is an {contribution.type}</li>
       </ul>
     )
   })}
   </>

  );  
};

export default Contributions;