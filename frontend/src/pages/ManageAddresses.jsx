import React, { useState } from "react";

const ManageAddresses = ({ savedAddresses, onUpdateAddress, onDeleteAddress }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      onDeleteAddress(index);
    }
  };

  const handleFavorite = (index) => {
    const updatedAddresses = savedAddresses.map((address, i) => ({
      ...address,
      isFavorite: i === index ? !address.isFavorite : address.isFavorite,
    }));
    onUpdateAddress(updatedAddresses);
  };

  const handleMapPreview = (coordinates) => {
    window.open(
      `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`,
      "_blank"
    );
  };

  return (
    <div className="container mx-auto py-4">
      {savedAddresses.length === 0 ? (
        <p className="text-gray-600 text-center">No addresses saved yet.</p>
      ) : (
        <ul className="space-y-4">
          {savedAddresses.map((address, index) => (
            <li
              key={index}
              className={`p-4 bg-white shadow-md rounded-lg ${
                selectedAddress === index ? "border-2 border-red-500" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-2 sm:mb-0">
                  <strong className="text-red-700">{address.category}:</strong>{" "}
                  <span className="text-gray-800">
                    {address.houseNumber}, {address.roadArea}
                  </span>
                  <br />
                  <span className="text-gray-600 text-sm">
                    (Lat: {address.coordinates.lat.toFixed(4)}, Lng:{" "}
                    {address.coordinates.lng.toFixed(4)})
                  </span>
                  {address.isFavorite && (
                    <span className="ml-2 text-yellow-500 font-bold">
                      ★ Favorite
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-yellow-600 transition-colors"
                    onClick={() => handleFavorite(index)}
                  >
                    {address.isFavorite ? "Unfavorite" : "Favorite"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-red-600 transition-colors"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-green-600 transition-colors"
                    onClick={() => handleMapPreview(address.coordinates)}
                  >
                    Map Preview
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageAddresses;

