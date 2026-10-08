import { useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const ImageUpload = ({ reportData, setReportData }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       //setImage(file);
//       setReportData((prev) => ({
//   ...prev,
//   image: file,
// }));
//     }
//   };

const handleMedia = (e) => {
    const files = Array.from(e.target.files);

    const updatedMedia = [
        ...reportData.media,
        ...files,
    ].slice(0, 10);

    setReportData({
        ...reportData,
        media: updatedMedia,
    });
};

  return (
    <div className="w-full">

      <label className="block text-xl font-semibold mb-4">
        Upload Image
      </label>

      {/* <div
        onClick={handleClick}
        className="border-2 border-dashed border-blue-400 rounded-xl p-10 text-center cursor-pointer hover:bg-blue-50 transition"
      >
        {reportData.image ? (
          // <img
          //   src={URL.createObjectURL(reportData.image)}
          //   alt="Preview"
          //   className="mx-auto max-h-80 rounded-lg"
          // />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {reportData.media.map((file, index) => (
        <div
            key={index}
            className="relative rounded-xl overflow-hidden"
        >
            {file.type.startsWith("image") ? (
                <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-full h-36 object-cover"
                />
            ) : (
                <video
                    src={URL.createObjectURL(file)}
                    className="w-full h-36 object-cover"
                    controls
                />
            )}

            <button
                onClick={() => {
                    const updated = reportData.media.filter(
                        (_, i) => i !== index
                    );

                    setReportData({
                        ...reportData,
                        media: updated,
                    });
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2"
            >
                ✕
            </button>
        </div>
    ))}
</div>
        ) : (
          <>
            <FaCloudUploadAlt
              className="mx-auto text-blue-500 mb-4"
              size={60}
            />

            <p className="text-lg font-medium">
              Drag & Drop Image
            </p>

            <p className="text-gray-500 my-2">
              OR
            </p>

            <button
              type="button"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Browse Files
            </button>
          </>
        )}
      </div> */}

    <div
  onClick={handleClick}
  className="border-2 border-dashed border-blue-400 rounded-xl p-10 text-center cursor-pointer hover:bg-blue-50 transition"
>
  {reportData.media && reportData.media.length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {reportData.media.map((file, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden"
        >
          {file.type.startsWith("image") ? (
            <img
              src={URL.createObjectURL(file)}
              alt={`Media ${index + 1}`}
              className="w-full h-36 object-cover"
            />
          ) : (
            <video
              src={URL.createObjectURL(file)}
              className="w-full h-36 object-cover"
              controls
            />
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              const updated = reportData.media.filter(
                (_, i) => i !== index
              );

              setReportData({
                ...reportData,
                media: updated,
              });
            }}
            className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  ) : (
    <>
      <FaCloudUploadAlt
        className="mx-auto text-blue-500 mb-4"
        size={60}
      />

      <p className="text-lg font-medium">
        Drag & Drop Images or Videos
      </p>

      <p className="text-gray-500 my-2">
        Upload up to 10 files
      </p>

      <button
        type="button"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Browse Files
      </button>
    </>
  )}
</div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*"
        hidden
        onChange={handleMedia}
      />
    </div>
  );
};

export default ImageUpload;