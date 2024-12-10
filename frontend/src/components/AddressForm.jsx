import React, { useState } from "react";

const AddressForm = ({ onSaveAddress }) => {
  const [formData, setFormData] = useState({
    houseNumber: "",
    roadArea: "",
    category: "Home",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.houseNumber.trim() || !formData.roadArea.trim()) {
        alert("Please fill out all fields.");
        return;
    }

    onSaveAddress(formData);
    setFormData({
      houseNumber: "",
      roadArea: "",
      category: "Home",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">Delivery Address Form</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="houseNumber"
        >
          House/Flat/Block No.
        </label>
        <input
          type="text"
          name="houseNumber"
          id="houseNumber"
          value={formData.houseNumber}
          onChange={handleChange}
          placeholder="Enter your house number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="roadArea"
        >
          Apartment/Road/Area
        </label>
        <input
          type="text"
          name="roadArea"
          id="roadArea"
          value={formData.roadArea}
          onChange={handleChange}
          placeholder="Enter your road/area"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Save As
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Friends & Family">Friends & Family</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;
