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
    <div className="container mx-auto py-8">
      {savedAddresses.length === 0 ? (
        <p className="text-gray-600 text-center">No addresses saved yet.</p>
      ) : (
        <ul className="space-y-4">
          {savedAddresses.map((address, index) => (
            <li
              key={index}
              className={`p-4 bg-white shadow rounded ${selectedAddress === index ? "border-2 border-blue-500" : ""
                }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <strong>{address.category}:</strong> {address.houseNumber},{" "}
                  {address.roadArea}
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
                <div className="flex space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded shadow hover:bg-yellow-600"
                    onClick={() => handleFavorite(index)}
                  >
                    {address.isFavorite ? "Unfavorite" : "Favorite"}
                  </button>
                
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-600"
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
