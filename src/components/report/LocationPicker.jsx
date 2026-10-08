import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";

// const LocationPicker = ({
//   location,
//   setLocation,
//   setIsMapOpen,
// }) => {
const LocationPicker = ({
  reportData,
  setReportData,
  setIsMapOpen,
}) => {
  const handleCurrentLocation = () => {
    // Temporary dummy location
    setReportData((prev) => ({
      ...prev,
      location: {
        lat: 28.7499,
        lng: 77.1170,
        address: "DTU Main Gate, Delhi",
      }
    }));
  };

  return (
    <div className="mt-8">

      <h2 className="text-xl font-semibold mb-4">
        Select Location
      </h2>

      <div className="space-y-4">

        {/* Current Location Button */}

        <button
          onClick={handleCurrentLocation}
          className="w-full flex items-center justify-center gap-3 border rounded-xl p-4 hover:bg-gray-100 transition"
        >
          <MdMyLocation size={24} />

          Use Current Location
        </button>

        <div className="text-center text-gray-500">
          OR
        </div>

        {/* Open Map Button */}

        <button
          onClick={() => setIsMapOpen(true)}
          className="w-full flex items-center justify-center gap-3 border rounded-xl p-4 hover:bg-gray-100 transition"
        >
          <FaMapMarkerAlt size={22} />

          Choose on Map
        </button>

        {/* Selected Location */}

        {reportData.location && (
          <div className="bg-blue-50 border border-blue-300 rounded-xl p-4">

            <p className="font-semibold text-blue-700">
              Selected Location
            </p>

            <p className="text-gray-700 mt-1">
              {reportData.location.address}
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default LocationPicker;