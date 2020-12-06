import React, {useState,useEffect} from "react";

const PolInfo = () => {
  const [hasError, setErrors] = useState(false);
  const [politicians, setPoliticians] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:5000/result");
    res
      .json()
      .then(res => setPoliticians(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });
  return (

    <ul>
    {politicians.map(function(name, index){
        return <li key={ index }>{name}</li>;
      })}
</ul>

  );
};

export default PolInfo;
