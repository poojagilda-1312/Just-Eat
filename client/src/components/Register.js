import React, { useState } from "react";

const Register = () => {
  const [formData, setformData] = useState({
    UserName: "",
    email: "",
    PhoneNo: "",
    Password: "",
  });
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data is submitted", formData);
  };
  return (
    <>
      <form
        className="max-w-md   mx-auto p-4 border rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <label className="block mb-2">
          UserName
          <input
            type="text"
            name="UserName"
            value={formData.userName}
            onChange={handleInputChange}
            placeholder="Enter name"
            required
            className="w-full border-black p-2 border rounded mt-1"
          />
        </label>

        <label className="block mb-2">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className="w-full p-2 border border-black rounded mt-1"
          />
        </label>
 
        <label className="block mb-2">
          PhoneNo
          <input
            type="number"
            name="PhoneNo"
            value={formData.PhoneNo}
            onChange={handleInputChange}
            required
            placeholder="Enter mobile number"
            className="w-full p-2 border  border-black rounded mt-1"
          />
        </label>
        <label className="block mb-2">
          Password
          <input
            type="Password"
            name="Password"
            value={formData.Password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full p-2 border border-black rounded mt-1"
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Register;
