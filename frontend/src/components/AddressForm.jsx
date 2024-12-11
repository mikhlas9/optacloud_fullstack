import React, { useState } from "react";
import { Home, Briefcase, Users, MapPin } from 'lucide-react';

const AddressForm = ({ onSaveAddress }) => {
  const [formData, setFormData] = useState({
    houseNumber: "",
    roadArea: "",
    category: "Home",
  });

  const categories = [
    { id: "Home", icon: Home },
    { id: "Office", icon: Briefcase },
    { id: "Friends & Family", icon: Users },
    { id: "Other", icon: MapPin },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategorySelect = (category) => {
    setFormData({
      ...formData,
      category,
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-bold mb-4 text-red-700">Delivery Address Form</h2>
      <div>
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
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      <div>
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
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-900 text-sm font-semibold mb-2">
          Save As
        </label>
        <div className="flex gap-3">
          {categories.map(({ id, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleCategorySelect(id)}
              className={`flex flex-col items-center p-2 rounded-full transition-all ${
                formData.category === id
                  ? "bg-red-500 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] mt-0.5 font-medium">{id}</span>
            </button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-full font-medium transition-colors shadow-md"
      >
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;

