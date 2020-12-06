import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


const PolInfo = (props) => {
  const [hasError, setErrors] = useState(false);
  const [politicians, setPoliticians] = useState([]);
 

  useEffect(() => {
    async function fetchData() {
      const loc = "http://localhost:5000/result/" + props.location.state.state + "/" + props.location.state.position
      const res = await fetch(loc);
      res
        .json()
        .then(res => setPoliticians(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  },[props.location.state.state,props.location.state.position]);




  return (
    <>
   {politicians.map(politician => {
     return(
       <>
      <div>
      {
        <Link
          to={{
            pathname: "/Contributions",
            contrib: { state: props.location.state.state, position: props.location.state.position, name: politician.name1 },
          }}
          
        >
          {politician.name1}
        </Link>
      }
    </div>

    <div>
      {
        <Link
          to={{
            pathname: "/Contributions",
            contrib: { state: props.location.state.state, position: props.location.state.position, name: politician.name2 },
          }}
          
        >
          {politician.name2}
        </Link>
      }
    </div>
    </>

     )
   })}
   </>

  );  
};

export default PolInfo;
