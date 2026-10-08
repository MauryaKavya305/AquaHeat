const categories = [
  {
    id: "leak",
    name: "Leak",
    icon: "💧",
  },
  {
    id: "waterlogging",
    name: "Waterlogging",
    icon: "🌊",
  },
  {
    id: "heatspot",
    name: "Heat Spot",
    icon: "🌡️",
  },
];

//const CategorySelector = ({ category, setCategory }) => {
const CategorySelector = ({ reportData, setReportData }) => {
  return (
    <div className="mt-8">

      <h2 className="text-xl font-semibold mb-4">
        Select Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {categories.map((item) => (

          <div
            key={item.id}
            //onClick={() => setCategory(item.id)}
            onClick={() =>
  setReportData((prev) => ({
    ...prev,
    category: item.id,
  }))
}
            className={`cursor-pointer rounded-xl border-2 p-6 text-center transition-all duration-200

              ${
                reportData.category === item.id
                  ? "border-blue-600 bg-blue-50 shadow-md"
                  : "border-gray-300 hover:border-blue-400 hover:shadow"
              }
            `}
          >

            <div className="text-5xl mb-4">
              {item.icon}
            </div>

            <p className="font-semibold text-lg">
              {item.name}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default CategorySelector;