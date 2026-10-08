const MAX_LENGTH = 200;

//const DescriptionBox = ({ description, setDescription }) => {
const DescriptionBox = ({
  reportData,
  setReportData,
}) => {
  const handleChange = (e) => {
    //setDescription(e.target.value);
    setReportData((prev) => ({
  ...prev,
  description: e.target.value,
}));
  };

  //console.log(reportData);

  return (
    <div className="mt-8">

      <h2 className="text-xl font-semibold mb-4">
        Description
      </h2>

      <textarea
        value={reportData.description}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        rows={5}
        placeholder="Tell us more about the issue..."
        className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-end mt-2">

        <span className="text-sm text-gray-500">
          {reportData.description.length} / {MAX_LENGTH}
        </span>

      </div>


    </div>
  );
};



export default DescriptionBox;