const NavigationButtons = ({ onCancel, onNext }) => {
  return (
    <div className="flex justify-between items-center mt-10">

      <button
        onClick={onCancel}
        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
      >
        Cancel
      </button>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Next →
      </button>

    </div>
  );
};

export default NavigationButtons;