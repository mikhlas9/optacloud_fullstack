import React from "react"

const LocationModal = ({ open, onClose, onEnableLocation, onSearchManually }) => {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm text-center"
        onClick={(e) => e.stopPropagation()}
      >
  
        <h2 className="text-xl font-bold mb-2">Location permission is off</h2>
      
        <div className="space-y-3">
          <button
            onClick={onEnableLocation}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-full font-medium transition-colors"
          >
            Enable Location
          </button>
          <button
            onClick={onSearchManually}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
          >
            Search your Location Manually
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationModal

