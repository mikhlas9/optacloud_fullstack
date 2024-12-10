import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Fetch all addresses
export const fetchAddresses = async () => {
  const response = await API.get("/addresses");
  return response.data;
};

// Create a new address
export const createAddress = async (address) => {
  const response = await API.post("/addresses", address);
  return response.data;
};

// Update an address
export const updateAddress = async (id, updatedAddress) => {
  const response = await API.put(`/addresses/${id}`, updatedAddress);
  return response.data;
};

// Delete an address
export const deleteAddress = async (id) => {
  const response = await API.delete(`/addresses/${id}`);
  return response.data;
};
