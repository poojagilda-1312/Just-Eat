import { useState } from "react";
import React from "react";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",

    Password: "",
  });
  const handleInputChange = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <form
        className="max-w-md   mx-auto p-4 border rounded shadow-md"
        onSubmit={handleSubmit}
      >
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
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
