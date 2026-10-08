import { useState } from "react";

import ImageUpload from "../../components/report/ImageUpload";
import CategorySelector from "../../components/report/CategorySelector";
import LocationPicker from "../../components/report/LocationPicker";
import MapModal from "../../components/report/MapModal";
import DescriptionBox from "../../components/report/DescriptionBox";
import NavigationButtons from "../../components/report/NavigationButtons";

import { useReport } from "../../context/ReportContext";
import { useNavigate } from "react-router-dom";

/* ---------- Small themed helpers (UI only) ---------- */

const DropIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
    <path
      d="M12 2.5c3.6 4.3 6.5 7.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 10.1 8.4 6.8 12 2.5Z"
      fill="url(#dropGrad)"
    />
    <defs>
      <linearGradient id="dropGrad" x1="12" y1="2" x2="12" y2="20">
        <stop stopColor="#67e8f9" />
        <stop offset="1" stopColor="#0e7490" />
      </linearGradient>
    </defs>
  </svg>
);

const FlameIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
    <path
      d="M12 2c.6 3.2-1.8 4.6-3.4 6.8C7.2 10.7 6.5 12.3 6.5 14a5.5 5.5 0 0 0 11 0c0-2-1-3.6-2.2-4.9-.3 1.1-.9 1.9-1.8 2.3.5-3.4-.4-6.9-1.5-9.4Z"
      fill="url(#flameGrad)"
    />
    <defs>
      <linearGradient id="flameGrad" x1="12" y1="2" x2="12" y2="20">
        <stop stopColor="#fdba74" />
        <stop offset="1" stopColor="#c2410c" />
      </linearGradient>
    </defs>
  </svg>
);

/* A section panel with a water→heat accent edge */
const Panel = ({ children, tone = "water" }) => {
  const accent =
    tone === "water"
      ? "from-cyan-400 to-sky-600"
      : tone === "heat"
      ? "from-amber-400 to-orange-600"
      : "from-cyan-400 via-sky-500 to-orange-500";

  return (
    <div
      className="
      relative
      bg-white
      rounded-2xl
      p-6 pl-7
      border
      border-slate-200/70
      shadow-[0_8px_30px_-12px_rgba(14,116,144,0.25)]
      overflow-hidden
      transition-shadow
      duration-300
      focus-within:shadow-[0_12px_36px_-10px_rgba(234,88,12,0.35)]
      "
    >
      <span
        className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accent}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

/* ---------- Page ---------- */

const ReportPage = () => {
  const { reportData, setReportData } = useReport();

  const [isMapOpen, setIsMapOpen] = useState(false);

  const navigate = useNavigate();

//   const handleCancel = () => {
//     console.log("Cancel clicked");
//   };

const handleCancel = () => {
  setReportData({
    media: [],
    category: "",
    location: null,
    description: "",
  });
};

  const handleNext = () => {
    // if (!reportData.image) {
    //   alert("Please upload an image");
    //   return;
    // }

    if (reportData.media.length === 0) {
    alert("Please upload at least one image or video");
    return;
}

    if (!reportData.category) {
      alert("Please select a category");
      return;
    }

    if (!reportData.location) {
      alert("Please select a location");
      return;
    }

    navigate("/review");
  };

  return (
    <div
      className="
      min-h-screen
      relative
      overflow-hidden
      py-10
      px-4
      sm:px-6
      bg-gradient-to-br
      from-cyan-50
      via-white
      to-orange-50
      "
    >
      {/* Heat glow (top right) */}
      <div
        className="
        pointer-events-none
        absolute
        -top-24
        -right-24
        w-[520px]
        h-[520px]
        rounded-full
        bg-gradient-to-br
        from-amber-300/40
        to-orange-500/20
        blur-[110px]
        "
      />

      {/* Water glow (bottom left) */}
      <div
        className="
        pointer-events-none
        absolute
        -bottom-24
        -left-24
        w-[520px]
        h-[520px]
        rounded-full
        bg-gradient-to-tr
        from-cyan-400/30
        to-sky-500/20
        blur-[110px]
        "
      />

      {/* Wave at the bottom */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full h-40 opacity-60"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,80 C240,140 480,20 720,70 C960,120 1200,30 1440,80 L1440,160 L0,160 Z"
          fill="#a5f3fc"
          fillOpacity="0.35"
        />
        <path
          d="M0,110 C260,60 520,150 780,100 C1040,50 1240,130 1440,100 L1440,160 L0,160 Z"
          fill="#38bdf8"
          fillOpacity="0.2"
        />
      </svg>

      {/* Main Card */}
      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        rounded-[28px]
        p-[2px]
        bg-gradient-to-r
        from-cyan-400
        via-sky-300
        to-orange-400
        shadow-2xl
        shadow-cyan-900/10
        "
      >
        <div
          className="
          rounded-[26px]
          bg-white/90
          backdrop-blur-xl
          p-6
          sm:p-10
          "
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="
                grid place-items-center
                w-12 h-12
                rounded-2xl
                bg-cyan-50
                ring-1 ring-cyan-200
                "
              >
                <DropIcon />
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-orange-300" />

              <span
                className="
                grid place-items-center
                w-12 h-12
                rounded-2xl
                bg-orange-50
                ring-1 ring-orange-200
                "
              >
                <FlameIcon />
              </span>
            </div>

            <h1
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              bg-gradient-to-r
              from-cyan-600
              via-sky-600
              to-orange-500
              text-transparent
              bg-clip-text
              "
            >
              Report an Environmental Issue
            </h1>

            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Help AquaHeat identify water and heat problems
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left */}
            <div className="lg:col-span-2">
              <Panel tone="water">
                <ImageUpload
                  reportData={reportData}
                  setReportData={setReportData}
                />
              </Panel>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 space-y-6">
              <Panel tone="water">
                <CategorySelector
                  reportData={reportData}
                  setReportData={setReportData}
                />
              </Panel>

              <Panel tone="mix">
                <LocationPicker
                  reportData={reportData}
                  setReportData={setReportData}
                  setIsMapOpen={setIsMapOpen}
                />
              </Panel>

              <Panel tone="heat">
                <DescriptionBox
                  reportData={reportData}
                  setReportData={setReportData}
                />
              </Panel>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="
            mt-10
            pt-6
            border-t
            border-slate-200/80
            "
          >
            <NavigationButtons onCancel={handleCancel} onNext={handleNext} />
          </div>
        </div>
      </div>

      <MapModal
        isMapOpen={isMapOpen}
        setIsMapOpen={setIsMapOpen}
        reportData={reportData}
        setReportData={setReportData}
      />
    </div>
  );
};

export default ReportPage;