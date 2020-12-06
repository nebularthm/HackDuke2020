import React, {useState,useEffect} from "react";

const PolInfo = () => {
  const [hasError, setErrors] = useState(false);
  const [politicians, setPoliticians] = useState({});

 

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/result");
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
