// import { useNavigate } from "react-router-dom";
// import { useReport } from "../../context/ReportContext";

// /* ---------- Small themed helpers (UI only) ---------- */

// const DropIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
//     <path
//       d="M12 2.5c3.6 4.3 6.5 7.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 10.1 8.4 6.8 12 2.5Z"
//       fill="url(#dropGradR)"
//     />
//     <defs>
//       <linearGradient id="dropGradR" x1="12" y1="2" x2="12" y2="20">
//         <stop stopColor="#67e8f9" />
//         <stop offset="1" stopColor="#0e7490" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const FlameIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
//     <path
//       d="M12 2c.6 3.2-1.8 4.6-3.4 6.8C7.2 10.7 6.5 12.3 6.5 14a5.5 5.5 0 0 0 11 0c0-2-1-3.6-2.2-4.9-.3 1.1-.9 1.9-1.8 2.3.5-3.4-.4-6.9-1.5-9.4Z"
//       fill="url(#flameGradR)"
//     />
//     <defs>
//       <linearGradient id="flameGradR" x1="12" y1="2" x2="12" y2="20">
//         <stop stopColor="#fdba74" />
//         <stop offset="1" stopColor="#c2410c" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// /* Section block with a water→heat accent edge */
// const Section = ({ title, tone = "water", children }) => {
//   const accent =
//     tone === "water"
//       ? "from-cyan-400 to-sky-600"
//       : tone === "heat"
//       ? "from-amber-400 to-orange-600"
//       : "from-cyan-400 via-sky-500 to-orange-500";

//   return (
//     <div
//       className="
//       relative
//       bg-white
//       rounded-2xl
//       p-6 pl-7
//       border
//       border-slate-200/70
//       shadow-[0_8px_30px_-12px_rgba(14,116,144,0.25)]
//       overflow-hidden
//       "
//     >
//       <span
//         className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accent}`}
//         aria-hidden="true"
//       />

//       <h2 className="text-xl font-semibold text-slate-800">{title}</h2>

//       {children}
//     </div>
//   );
// };

// /* ---------- Page ---------- */

// const ReviewPage = () => {
//   const { reportData } = useReport();

//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate("/report");
//   };

//   const handleAnalyze = () => {
//     navigate("/analysis");
//   };

//   return (
//     <div
//       className="
//       min-h-screen
//       relative
//       overflow-hidden
//       flex
//       justify-center
//       py-10
//       px-4
//       sm:px-6
//       bg-gradient-to-br
//       from-cyan-50
//       via-white
//       to-orange-50
//       "
//     >
//       {/* Heat glow (top right) */}
//       <div
//         className="
//         pointer-events-none
//         absolute
//         -top-24
//         -right-24
//         w-[520px]
//         h-[520px]
//         rounded-full
//         bg-gradient-to-br
//         from-amber-300/40
//         to-orange-500/20
//         blur-[110px]
//         "
//       />

//       {/* Water glow (bottom left) */}
//       <div
//         className="
//         pointer-events-none
//         absolute
//         -bottom-24
//         -left-24
//         w-[520px]
//         h-[520px]
//         rounded-full
//         bg-gradient-to-tr
//         from-cyan-400/30
//         to-sky-500/20
//         blur-[110px]
//         "
//       />

//       {/* Wave at the bottom */}
//       <svg
//         className="pointer-events-none absolute bottom-0 left-0 w-full h-40 opacity-60"
//         viewBox="0 0 1440 160"
//         preserveAspectRatio="none"
//         aria-hidden="true"
//       >
//         <path
//           d="M0,80 C240,140 480,20 720,70 C960,120 1200,30 1440,80 L1440,160 L0,160 Z"
//           fill="#a5f3fc"
//           fillOpacity="0.35"
//         />
//         <path
//           d="M0,110 C260,60 520,150 780,100 C1040,50 1240,130 1440,100 L1440,160 L0,160 Z"
//           fill="#38bdf8"
//           fillOpacity="0.2"
//         />
//       </svg>

//       {/* Main Card */}
//       <div
//         className="
//         relative
//         z-10
//         w-full
//         max-w-3xl
//         h-fit
//         rounded-[28px]
//         p-[2px]
//         bg-gradient-to-r
//         from-cyan-400
//         via-sky-300
//         to-orange-400
//         shadow-2xl
//         shadow-cyan-900/10
//         "
//       >
//         <div
//           className="
//           rounded-[26px]
//           bg-white/90
//           backdrop-blur-xl
//           p-6
//           sm:p-10
//           "
//         >
//           {/* Header */}
//           <div className="text-center mb-10">
//             <div className="flex items-center justify-center gap-3 mb-4">
//               <span className="grid place-items-center w-12 h-12 rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
//                 <DropIcon />
//               </span>

//               <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-orange-300" />

//               <span className="grid place-items-center w-12 h-12 rounded-2xl bg-orange-50 ring-1 ring-orange-200">
//                 <FlameIcon />
//               </span>
//             </div>

//             <h1
//               className="
//               text-3xl
//               sm:text-4xl
//               font-extrabold
//               tracking-tight
//               bg-gradient-to-r
//               from-cyan-600
//               via-sky-600
//               to-orange-500
//               text-transparent
//               bg-clip-text
//               "
//             >
//               Review Your Report
//             </h1>
//           </div>

//           <div className="space-y-6">
//             {/* Image Preview */}
//             {/* <Section title="Uploaded Image" tone="water">
//               <div
//                 className="
//                 mt-4
//                 rounded-xl
//                 p-4
//                 flex
//                 justify-center
//                 bg-gradient-to-br
//                 from-cyan-50
//                 to-sky-50
//                 border
//                 border-dashed
//                 border-cyan-200
//                 "
//               >
//                 {reportData.image && (
//                   <img
//                     src={URL.createObjectURL(reportData.image)}
//                     alt="Issue"
//                     className="max-h-80 rounded-lg shadow-md ring-1 ring-white"
//                   />
//                 )}
//               </div>
//             </Section> */}

//             {/* Uploaded Media */}
// <Section title="Uploaded Media" tone="water">
//   <div
//     className="
//     mt-4
//     rounded-xl
//     p-4
//     bg-gradient-to-br
//     from-cyan-50
//     to-sky-50
//     border
//     border-dashed
//     border-cyan-200
//     "
//   >
//     {reportData.media && reportData.media.length > 0 ? (
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {reportData.media.map((file, index) => (
//           <div
//             key={index}
//             className="rounded-lg overflow-hidden shadow-md bg-white"
//           >
//             {file.type.startsWith("image") ? (
//               <img
//                 src={URL.createObjectURL(file)}
//                 alt={`Media ${index + 1}`}
//                 className="w-full h-40 object-cover"
//               />
//             ) : (
//               <video
//                 src={URL.createObjectURL(file)}
//                 controls
//                 className="w-full h-40 object-cover"
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     ) : (
//       <p className="text-center text-slate-500">
//         No media uploaded.
//       </p>
//     )}
//   </div>
// </Section>

//             {/* Category */}
//             <Section title="Category" tone="water">
//               <p
//                 className="
//                 mt-3
//                 inline-block
//                 px-4
//                 py-1.5
//                 rounded-full
//                 bg-cyan-50
//                 text-cyan-800
//                 ring-1
//                 ring-cyan-200
//                 font-medium
//                 capitalize
//                 "
//               >
//                 {reportData.category}
//               </p>
//             </Section>

//             {/* Location */}
//             <Section title="Location" tone="mix">
//               <p className="mt-3 text-slate-700">
//                 📍 {reportData.location?.address}
//               </p>
//             </Section>

//             {/* Description */}
//             <Section title="Description" tone="heat">
//               <p className="mt-3 text-slate-700 leading-relaxed">
//                 {reportData.description || "No description provided"}
//               </p>
//             </Section>
//           </div>

//           {/* Buttons */}
//           <div
//             className="
//             flex
//             justify-between
//             gap-4
//             mt-10
//             pt-6
//             border-t
//             border-slate-200/80
//             "
//           >
//             <button
//               onClick={handleBack}
//               className="
//               px-6
//               py-3
//               rounded-xl
//               border
//               border-cyan-200
//               bg-white
//               text-cyan-800
//               font-medium
//               transition
//               hover:bg-cyan-50
//               hover:border-cyan-300
//               focus:outline-none
//               focus-visible:ring-2
//               focus-visible:ring-cyan-400
//               "
//             >
//               ← Back
//             </button>

//             <button
//               onClick={handleAnalyze}
//               className="
//               px-6
//               py-3
//               rounded-xl
//               text-white
//               font-semibold
//               bg-gradient-to-r
//               from-cyan-600
//               via-sky-600
//               to-orange-500
//               shadow-lg
//               shadow-cyan-900/20
//               transition
//               hover:brightness-110
//               hover:shadow-orange-500/30
//               focus:outline-none
//               focus-visible:ring-2
//               focus-visible:ring-orange-400
//               focus-visible:ring-offset-2
//               "
//             >
//               Analyze with AI
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewPage;

import { useNavigate } from "react-router-dom";
import { useReport } from "../../context/ReportContext";

/* ------------------------------------------------------------------
   Plain scoped CSS (rv- prefix) instead of Tailwind utilities, so a
   global reset such as `* { margin:0; padding:0 }` in index.css or
   App.css cannot remove the spacing.
------------------------------------------------------------------- */

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

.rv-page {
  --water-1: #22d3ee;
  --water-2: #0284c7;
  --heat-1: #fbbf24;
  --heat-2: #ea580c;
  --ink: #0f172a;
  --muted: #475569;

  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 48px 20px 120px;
  overflow: hidden;
  text-align: left;
  font-family: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  color: var(--ink);
  background: linear-gradient(135deg, #ecfeff 0%, #ffffff 50%, #fff7ed 100%);
}
.rv-page *, .rv-page *::before, .rv-page *::after { box-sizing: border-box; }

/* ---------- Background ---------- */
.rv-glow { position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none; }
.rv-glow-heat  { top: -140px; right: -140px; width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(251,191,36,.45), rgba(234,88,12,.22)); }
.rv-glow-water { bottom: -140px; left: -140px; width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(34,211,238,.4), rgba(2,132,199,.2)); }
.rv-wave { position: absolute; left: 0; bottom: 0; width: 100%; height: 160px; pointer-events: none; opacity: .65; }

/* ---------- Card ---------- */
.rv-card-border {
  position: relative; z-index: 1;
  width: 100%; max-width: 760px; margin: 0 auto;
  padding: 2px; border-radius: 30px;
  background: linear-gradient(90deg, var(--water-1), #7dd3fc 50%, var(--heat-2));
  box-shadow: 0 30px 70px -30px rgba(8,100,140,.35);
}
.rv-card {
  border-radius: 28px;
  padding: 44px 40px 32px;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

/* ---------- Header ---------- */
.rv-header { text-align: center; margin-bottom: 36px; }
.rv-icons { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 18px; }
.rv-chip { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 16px; }
.rv-chip-water { background: #ecfeff; box-shadow: inset 0 0 0 1px #a5f3fc; }
.rv-chip-heat  { background: #fff7ed; box-shadow: inset 0 0 0 1px #fed7aa; }
.rv-line { width: 44px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, #67e8f9, #fdba74); }
.rv-title {
  margin: 0;
  font-size: clamp(2rem, 4.4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.025em;
  background: linear-gradient(90deg, #0891b2, #0284c7 45%, #f97316);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}

/* ---------- Sections ---------- */
.rv-stack { display: flex; flex-direction: column; gap: 20px; }

.rv-section {
  position: relative;
  padding: 24px 24px 24px 30px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.25);
  box-shadow: 0 10px 30px -16px rgba(14,116,144,.35);
  overflow: hidden;
  transition: box-shadow .25s ease, transform .25s ease;
}
.rv-section:hover { transform: translateY(-2px); box-shadow: 0 16px 38px -16px rgba(14,116,144,.42); }
.rv-section::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; }
.rv-water::before { background: linear-gradient(180deg, var(--water-1), var(--water-2)); }
.rv-mix::before   { background: linear-gradient(180deg, var(--water-1), #38bdf8 50%, var(--heat-2)); }
.rv-heat::before  { background: linear-gradient(180deg, var(--heat-1), var(--heat-2)); }

.rv-section-title {
  margin: 0 0 14px;
  font-size: 1.15rem; font-weight: 700; letter-spacing: -0.01em; color: var(--ink);
}

/* Media */
.rv-media-box {
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(135deg, #ecfeff, #f0f9ff);
  border: 1.5px dashed #a5f3fc;
}
.rv-media-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.rv-media-item {
  border-radius: 14px; overflow: hidden; background: #fff;
  box-shadow: 0 8px 20px -10px rgba(14,116,144,.45);
  outline: 1px solid rgba(255,255,255,.8);
  transition: transform .2s ease, box-shadow .2s ease;
}
.rv-media-item:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 14px 26px -12px rgba(14,116,144,.55); }
.rv-media-item img, .rv-media-item video { display: block; width: 100%; height: 150px; object-fit: cover; }
.rv-empty { margin: 0; padding: 12px 0; text-align: center; color: #64748b; }

/* Category pill */
.rv-pill {
  display: inline-block; margin: 0; padding: 8px 18px; border-radius: 999px;
  background: #ecfeff; color: #0e7490; font-weight: 600; text-transform: capitalize;
  box-shadow: inset 0 0 0 1px #a5f3fc;
}

/* Text */
.rv-text { margin: 0; color: #334155; line-height: 1.65; }

/* ---------- Buttons ---------- */
.rv-actions {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  margin-top: 36px; padding-top: 24px; border-top: 1px solid rgba(148,163,184,.3);
}
.rv-btn {
  padding: 12px 28px; border-radius: 14px; font-family: inherit; font-size: 1rem; font-weight: 700;
  cursor: pointer; transition: transform .15s ease, box-shadow .2s ease, filter .2s ease, background-color .2s ease;
}
.rv-btn:focus-visible { outline: 3px solid rgba(251,146,60,.5); outline-offset: 3px; }
.rv-back { background: #fff; color: #0e7490; border: 1.5px solid #a5f3fc; }
.rv-back:hover { background: #ecfeff; border-color: #22d3ee; transform: translateY(-1px); }
.rv-next {
  color: #fff; border: 0;
  background: linear-gradient(90deg, #0891b2, #0284c7 50%, #f97316);
  box-shadow: 0 12px 24px -12px rgba(2,132,199,.7);
}
.rv-next:hover { filter: brightness(1.08); transform: translateY(-1px); box-shadow: 0 16px 28px -12px rgba(249,115,22,.6); }

/* ---------- Responsive ---------- */
@media (max-width: 640px) {
  .rv-page { padding: 24px 12px 100px; }
  .rv-card { padding: 32px 18px 24px; }
  .rv-section { padding: 20px 18px 20px 24px; }
  .rv-media-grid { grid-template-columns: repeat(2, 1fr); }
  .rv-actions { flex-direction: column-reverse; align-items: stretch; }
}
`;

/* ---------- Icons ---------- */

const DropIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
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
const Section = ({ title, tone = "water", children }) => (
  <div className={`rv-section rv-${tone}`}>
    <h2 className="rv-section-title">{title}</h2>
    {children}
  </div>
);

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
    <div className="rv-page">
      <style>{styles}</style>

      {/* Background */}
      <div className="rv-glow rv-glow-heat" />
      <div className="rv-glow rv-glow-water" />

      <svg
        className="rv-wave"
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
      <div className="rv-card-border">
        <div className="rv-card">
          {/* Header */}
          <div className="rv-header">
            <div className="rv-icons">
              <span className="rv-chip rv-chip-water">
                <DropIcon />
              </span>
              <span className="rv-line" />
              <span className="rv-chip rv-chip-heat">
                <FlameIcon />
              </span>
            </div>

            <h1 className="rv-title">Review Your Report</h1>
          </div>

          <div className="rv-stack">
            {/* Uploaded Media */}
            <Section title="Uploaded Media" tone="water">
              <div className="rv-media-box">
                {reportData.media && reportData.media.length > 0 ? (
                  <div className="rv-media-grid">
                    {reportData.media.map((file, index) => (
                      <div key={index} className="rv-media-item">
                        {file.type.startsWith("image") ? (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Media ${index + 1}`}
                          />
                        ) : (
                          <video src={URL.createObjectURL(file)} controls />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="rv-empty">No media uploaded.</p>
                )}
              </div>
            </Section>

            {/* Category */}
            <Section title="Category" tone="water">
              <p className="rv-pill">{reportData.category}</p>
            </Section>

            {/* Location */}
            <Section title="Location" tone="mix">
              <p className="rv-text">📍 {reportData.location?.address}</p>
            </Section>

            {/* Description */}
            <Section title="Description" tone="heat">
              <p className="rv-text">
                {reportData.description || "No description provided"}
              </p>
            </Section>
          </div>

          {/* Buttons */}
          <div className="rv-actions">
            <button onClick={handleBack} className="rv-btn rv-back">
              ← Back
            </button>

            <button onClick={handleAnalyze} className="rv-btn rv-next">
              Analyze with AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;