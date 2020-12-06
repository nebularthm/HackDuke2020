import React, {useState,useEffect} from "react";

const PolInfo = (props) => {
  const [hasError, setErrors] = useState(false);
  const [politicians, setPoliticians] = useState({});

 

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
  },[]);
  return (
    <div>
      {JSON.stringify(politicians)}
    </div>

  );  
};

export default PolInfo;
