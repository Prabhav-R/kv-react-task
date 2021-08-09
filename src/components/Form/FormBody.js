import React, { useState } from "react";
import Button from "./FormElements/Button";
import ErrorText from "./FormElements/ErrorText";
import FileUpload from "./FormElements/FileUpload";

import Input from "./FormElements/Input";
import Select from "./FormElements/Select";

const FormBody = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [role, setRole] = useState("Choose Role");
  const [status, setStatus] = useState("Status");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [IDProof, setIDProof] = useState(null);
  const [phNumber, setPhNumber] = useState("");

  const roleOptions = [
    { display: "Choose Role", isDefault: true, value: "Choose Role" },
    { display: "Front End", isDefault: false, value: "frontEnd" },
    { display: "Back End", isDefault: false, value: "backEnd" },
  ];

  const statusOptions = [
    { display: "Status", isDefault: true, value: "Status" },
    { display: "Employed", isDefault: false, value: "employed" },
    { display: "Not working", isDefault: false, value: "umemployed" },
  ];

  const isValid = () => {
    if (!/^[A-Za-z.\s]+$/.test(employeeName))
      return "Please enter a valid name";

    if (!/^[a-zA-Z0-9\s,'-/]*$/.test(address))
      return "Please enter a valid Address";

    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email))
      return "Please enter a valid email id";

    if (!/[A-Z]{1}-[0-9]{2,3}/.test(employeeId))
      return "Please enter a valid employee id";

    if (!/^[0-9][0-9]*$/.test(experience))
      return "Please enter a valid number of experience";

    if (!/^(\+91)?[0]?(91)?[789]\d{9}$/.test(phNumber))
      return "Please enter a valid phone number";

    if (role === "Choose Role") return "please choose a role";

    if (status === "Status") return "please choose a status";

    return "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = isValid();
    if (err !== "") {
      alert(err);
      return;
    }

    console.log({
      employeeId,
      employeeName,
      role,
      status,
      experience,
      IDProof,
      phNumber,
      email,
      joiningDate,
      address,
    });
  };

  const clearInput = () => {
    setEmail("");
    setEmployeeId("");
    setEmployeeName("");
    setJoiningDate("");
    setRole("Choose Role");
    setStatus("Status");
    setAddress("");
    setExperience("");
    setIDProof("");
    setPhNumber("");
  };

  return (
    <form onSubmit={onSubmit} id="formEmployee" className="content-items">
      <div className="grid-item">
        <Input
          label="Employee Name"
          type="text"
          placeholder="Employee Name"
          name="employeeName"
          value={employeeName}
          handler={setEmployeeName}
          id="employeeName"
        />

        <ErrorText id="employeeNameError" />
      </div>
      <div className="grid-item">
        <Input
          label="Employee ID"
          type="text"
          placeholder="Employee ID"
          name="employeeId"
          id="employeeId"
          value={employeeId}
          handler={setEmployeeId}
        />
        <ErrorText id="employeeIdError" />
      </div>
      <div className="grid-item">
        <Input
          label="Joining Date"
          type="date"
          placeholder="Joining Date"
          name="role"
          value={joiningDate}
          handler={setJoiningDate}
        />
      </div>
      <div className="grid-item">
        <Select
          label="Role"
          id="role"
          name="role"
          options={roleOptions}
          value={role}
          handler={setRole}
        />
      </div>
      <div className="grid-item">
        <Select
          label="Status"
          id="status"
          name="status"
          options={statusOptions}
          value={status}
          handler={setStatus}
        />
      </div>
      <div className="grid-item">
        <Input
          label="Experience"
          type="number"
          placeholder="Experience"
          name="experience"
          id="experience"
          value={experience}
          handler={setExperience}
        />

        <ErrorText id="experienceError" />
      </div>
      <div className="grid-item">
        <Input
          label="Address"
          type="text"
          placeholder="Address"
          name="address"
          id="address"
          value={address}
          handler={setAddress}
        />
        <ErrorText id="addressError" />
      </div>
      <div className="grid-item">
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          handler={setEmail}
        />

        <ErrorText id="emailError" />
      </div>
      <div className="grid-item">
        <FileUpload
          label="Upload ID proof"
          value={IDProof}
          handler={setIDProof}
          name="IDProof"
        />
      </div>
      <div className="grid-item">
        <Input
          label="Phone Number"
          type="text"
          placeholder="Phone Number"
          name="phNumber"
          id="phNumber"
          value={phNumber}
          handler={setPhNumber}
        />

        <ErrorText id="phNumberError" />
      </div>
      <div />
      <div />
      <div className="grid-item">
        <span>
          <input
            type="button"
            onClick={(e) => clearInput()}
            value="Cancel"
            id="cancel"
          />

          <input type="submit" value="Create" />
        </span>
      </div>
    </form>
  );
};

export default FormBody;
