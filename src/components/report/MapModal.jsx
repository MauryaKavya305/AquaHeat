import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
};

// const MapModal = ({
//   isMapOpen,
//   setIsMapOpen,
//   setLocation,
// }) => {
const MapModal = ({
    isMapOpen,
    setIsMapOpen,
    reportData,
    setReportData,
}) => {
  const [position, setPosition] = useState(null);

  if (!isMapOpen) return null;

  const handleConfirm = () => {
    if (!position) return;

    // setLocation({
    //   lat: position.lat,
    //   lng: position.lng,
    //   address: `Lat: ${position.lat.toFixed(5)}, Lng: ${position.lng.toFixed(5)}`,
    // });
    setReportData((prev) => ({
  ...prev,
  location: {
    lat: position.lat,
    lng: position.lng,
    address: `Lat: ${position.lat.toFixed(5)}, Lng: ${position.lng.toFixed(5)}`,
  },
}));

    setIsMapOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl w-[90%] max-w-4xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          Select Location
        </h2>

        <MapContainer
          center={[28.7499, 77.1170]}
          zoom={15}
          className="h-[450px] rounded-xl"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker
            position={position}
            setPosition={setPosition}
          />
        </MapContainer>

        <div className="flex justify-end gap-4 mt-6">

          <button
            onClick={() => setIsMapOpen(false)}
            className="px-5 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
};

export default MapModal;