import React, { useState, useEffect } from "react";
import LocationModal from "./components/LocationModal";
import MapComponent from "./components/MapComponent";
import AddressForm from "./components/AddressForm";
import ManageAddresses from "./pages/ManageAddresses";
import {
  fetchAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
} from "./services/api";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userPosition, setUserPosition] = useState({
    lat: 34.093967,
    lng: 74.719821, 
  });
  const [savedAddresses, setSavedAddresses] = useState([]);

  useEffect(() => {
    const loadAddresses = async () => {
      try {
        const data = await fetchAddresses();
        setSavedAddresses(data);
      } catch (error) {
        console.error("Error loading addresses:", error.message);
      }
    };
    loadAddresses();
  }, []);

  const handleEnableLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserPosition(coords);
          setIsModalOpen(false);
        },
        (error) => {
          console.error("Error accessing location:", error.message);
          alert("Unable to fetch location. Please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSearchManually = () => {
    setIsModalOpen(false);
  };

  const handlePositionChange = (newPosition) => {
    setUserPosition(newPosition);
  };

  const handleSaveAddress = async (formData) => {
    try {
      const newAddress = {
        ...formData,
        coordinates: userPosition,
      };
      const savedAddress = await createAddress(newAddress);
      setSavedAddresses([...savedAddresses, savedAddress]);
      alert("Address saved successfully!");
    } catch (error) {
      console.error("Error saving address:", error.message);
    }
  };

  const handleUpdateAddress = async (updatedAddresses) => {
    try {
      setSavedAddresses(updatedAddresses);

      for (const address of updatedAddresses) {
        await updateAddress(address._id, address);
      }
    } catch (error) {
      console.error("Error updating address:", error.message);
    }
  };

  const handleDeleteAddress = async (index) => {
    try {
      const addressToDelete = savedAddresses[index];
      await deleteAddress(addressToDelete._id);
      setSavedAddresses(savedAddresses.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting address:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
 
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <h1 className="text-3xl font-bold text-center py-6 bg-blue-600 text-white">
            Location Flow App
          </h1>
          <LocationModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnableLocation={handleEnableLocation}
        onSearchManually={handleSearchManually}
      />
          <div className="p-6">
            <MapComponent
              initialPosition={userPosition}
              onPositionChange={handlePositionChange}
            />
       
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold p-4 bg-gray-100">Add New Address</h2>
            <div className="p-6">
              <AddressForm onSaveAddress={handleSaveAddress} />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold p-4 bg-gray-100">Manage Addresses</h2>
            <div className="p-6">
              <ManageAddresses
                savedAddresses={savedAddresses}
                onUpdateAddress={handleUpdateAddress}
                onDeleteAddress={handleDeleteAddress}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
