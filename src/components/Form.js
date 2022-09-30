import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Dismas");
  const [lastName, setLastName] = useState("Ngoda");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const [errors, setErrors] = useState([]);
  const handleSubmit =(e)=>{
    e.preventDefault();
    // Checking mandatory field, firstName
    if(firstName.length>0){
    const formData = { firstName: firstName, lastName: lastName};
    const dataArray = {...submittedData, formData};
    setSubmittedData(dataArray);
    // props.sendFormDataSomewhere(formData);
    setFirstName("");
    setLastName("");
    setErrors([]);
    }
    else{
      setErrors(["First name and last name must be field!"]);
    }

  }
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {/* Rendering error message to the user */}
    {errors.length > 0 ? errors.map((error, index) =>(
      <p key={index} style={{color:"red"}}>{error}</p>
    )) : null}

    <h3>Submitted Data</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
