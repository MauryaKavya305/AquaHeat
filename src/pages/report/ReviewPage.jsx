import { useNavigate } from "react-router-dom";
import { useReport } from "../../context/ReportContext";

/* ---------- Small themed helpers (UI only) ---------- */

const DropIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
    <path
      d="M12 2.5c3.6 4.3 6.5 7.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 10.1 8.4 6.8 12 2.5Z"
      fill="url(#dropGradR)"
    />
    <defs>
      <linearGradient id="dropGradR" x1="12" y1="2" x2="12" y2="20">
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
      fill="url(#flameGradR)"
    />
    <defs>
      <linearGradient id="flameGradR" x1="12" y1="2" x2="12" y2="20">
        <stop stopColor="#fdba74" />
        <stop offset="1" stopColor="#c2410c" />
      </linearGradient>
    </defs>
  </svg>
);

/* Section block with a water→heat accent edge */
const Section = ({ title, tone = "water", children }) => {
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
      "
    >
      <span
        className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accent}`}
        aria-hidden="true"
      />

      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>

      {children}
    </div>
  );
};

/* ---------- Page ---------- */

const ReviewPage = () => {
  const { reportData } = useReport();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/report");
  };

  const handleAnalyze = () => {
    navigate("/analysis");
  };

  return (
    <div
      className="
      min-h-screen
      relative
      overflow-hidden
      flex
      justify-center
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
        w-full
        max-w-3xl
        h-fit
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
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                <DropIcon />
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-orange-300" />

              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-orange-50 ring-1 ring-orange-200">
                <FlameIcon />
              </span>
            </div>

            <h1
              className="
              text-3xl
              sm:text-4xl
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
              Review Your Report
            </h1>
          </div>

          <div className="space-y-6">
            {/* Image Preview */}
            {/* <Section title="Uploaded Image" tone="water">
              <div
                className="
                mt-4
                rounded-xl
                p-4
                flex
                justify-center
                bg-gradient-to-br
                from-cyan-50
                to-sky-50
                border
                border-dashed
                border-cyan-200
                "
              >
                {reportData.image && (
                  <img
                    src={URL.createObjectURL(reportData.image)}
                    alt="Issue"
                    className="max-h-80 rounded-lg shadow-md ring-1 ring-white"
                  />
                )}
              </div>
            </Section> */}

            {/* Uploaded Media */}
<Section title="Uploaded Media" tone="water">
  <div
    className="
    mt-4
    rounded-xl
    p-4
    bg-gradient-to-br
    from-cyan-50
    to-sky-50
    border
    border-dashed
    border-cyan-200
    "
  >
    {reportData.media && reportData.media.length > 0 ? (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {reportData.media.map((file, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md bg-white"
          >
            {file.type.startsWith("image") ? (
              <img
                src={URL.createObjectURL(file)}
                alt={`Media ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            ) : (
              <video
                src={URL.createObjectURL(file)}
                controls
                className="w-full h-40 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-slate-500">
        No media uploaded.
      </p>
    )}
  </div>
</Section>

            {/* Category */}
            <Section title="Category" tone="water">
              <p
                className="
                mt-3
                inline-block
                px-4
                py-1.5
                rounded-full
                bg-cyan-50
                text-cyan-800
                ring-1
                ring-cyan-200
                font-medium
                capitalize
                "
              >
                {reportData.category}
              </p>
            </Section>

            {/* Location */}
            <Section title="Location" tone="mix">
              <p className="mt-3 text-slate-700">
                📍 {reportData.location?.address}
              </p>
            </Section>

            {/* Description */}
            <Section title="Description" tone="heat">
              <p className="mt-3 text-slate-700 leading-relaxed">
                {reportData.description || "No description provided"}
              </p>
            </Section>
          </div>

          {/* Buttons */}
          <div
            className="
            flex
            justify-between
            gap-4
            mt-10
            pt-6
            border-t
            border-slate-200/80
            "
          >
            <button
              onClick={handleBack}
              className="
              px-6
              py-3
              rounded-xl
              border
              border-cyan-200
              bg-white
              text-cyan-800
              font-medium
              transition
              hover:bg-cyan-50
              hover:border-cyan-300
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400
              "
            >
              ← Back
            </button>

            <button
              onClick={handleAnalyze}
              className="
              px-6
              py-3
              rounded-xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-cyan-600
              via-sky-600
              to-orange-500
              shadow-lg
              shadow-cyan-900/20
              transition
              hover:brightness-110
              hover:shadow-orange-500/30
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-orange-400
              focus-visible:ring-offset-2
              "
            >
              Analyze with AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;