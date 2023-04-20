import React, { useState } from "react";
import "./table.css"
export default function Table() {
  let [array, setArray] = useState([]);
  let [inputdata, setInputdata] = useState({
    name: "",
    number: "",
    email: "",
    college: "",
  });
  let { name, number, email, college } = inputdata;

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  function addinputdata() {
    if (name === "" && number === "" && email === "" && college === "") {
      alert("Enter Name, no, email and college");
    } else {
      setArray([...array, { name, number, email, college }]);
      setInputdata({ name: "", number: "", email: "", college: "" });
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputdata.name || ""}
        name="name"
        autoComplete="off"
        placeholder="Enter Name"
        onChange={data}
      />
      <input
        type="number"
        value={inputdata.number || ""}
        name="number"
        placeholder="Enter Number"
        onChange={data}
      />
      <input
        type="text"
        value={inputdata.email || ""}
        name="email"
        placeholder="Enter Email"
        onChange={data}
      />
      <input
        type="text"
        value={inputdata.college || ""}
        name="college"
        placeholder="Enter college Name"
        onChange={data}
      />
      <button onClick={addinputdata}>{`Add data`}</button>

      <br />

      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>email</th>
            <th>college</th>
          </tr>
          {array &&
            array.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td>{item.email}</td>
                  <td>{item.college}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
