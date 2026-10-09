// import { useState } from "react";

// import ImageUpload from "../../components/report/ImageUpload";
// import CategorySelector from "../../components/report/CategorySelector";
// import LocationPicker from "../../components/report/LocationPicker";
// import MapModal from "../../components/report/MapModal";
// import DescriptionBox from "../../components/report/DescriptionBox";
// import NavigationButtons from "../../components/report/NavigationButtons";

// import { useReport } from "../../context/ReportContext";
// import { useNavigate } from "react-router-dom";

// /* ---------- Small themed helpers (UI only) ---------- */

// const DropIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
//     <path
//       d="M12 2.5c3.6 4.3 6.5 7.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 10.1 8.4 6.8 12 2.5Z"
//       fill="url(#dropGrad)"
//     />
//     <defs>
//       <linearGradient id="dropGrad" x1="12" y1="2" x2="12" y2="20">
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
//       fill="url(#flameGrad)"
//     />
//     <defs>
//       <linearGradient id="flameGrad" x1="12" y1="2" x2="12" y2="20">
//         <stop stopColor="#fdba74" />
//         <stop offset="1" stopColor="#c2410c" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// /* A section panel with a water→heat accent edge */
// const Panel = ({ children, tone = "water" }) => {
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
//       transition-shadow
//       duration-300
//       focus-within:shadow-[0_12px_36px_-10px_rgba(234,88,12,0.35)]
//       "
//     >
//       <span
//         className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accent}`}
//         aria-hidden="true"
//       />
//       {children}
//     </div>
//   );
// };

// /* ---------- Page ---------- */

// const ReportPage = () => {
//   const { reportData, setReportData } = useReport();

//   const [isMapOpen, setIsMapOpen] = useState(false);

//   const navigate = useNavigate();

// //   const handleCancel = () => {
// //     console.log("Cancel clicked");
// //   };

// const handleCancel = () => {
//   setReportData({
//     media: [],
//     category: "",
//     location: null,
//     description: "",
//   });
// };

//   const handleNext = () => {
//     // if (!reportData.image) {
//     //   alert("Please upload an image");
//     //   return;
//     // }

//     if (reportData.media.length === 0) {
//     alert("Please upload at least one image or video");
//     return;
// }

//     if (!reportData.category) {
//       alert("Please select a category");
//       return;
//     }

//     if (!reportData.location) {
//       alert("Please select a location");
//       return;
//     }

//     navigate("/review");
//   };

//   return (
//     <div
//       className="
//       min-h-screen
//       relative
//       overflow-hidden
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
//         max-w-5xl
//         mx-auto
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
//               <span
//                 className="
//                 grid place-items-center
//                 w-12 h-12
//                 rounded-2xl
//                 bg-cyan-50
//                 ring-1 ring-cyan-200
//                 "
//               >
//                 <DropIcon />
//               </span>

//               <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-orange-300" />

//               <span
//                 className="
//                 grid place-items-center
//                 w-12 h-12
//                 rounded-2xl
//                 bg-orange-50
//                 ring-1 ring-orange-200
//                 "
//               >
//                 <FlameIcon />
//               </span>
//             </div>

//             <h1
//               className="
//               text-3xl
//               sm:text-4xl
//               md:text-5xl
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
//               Report an Environmental Issue
//             </h1>

//             <p className="mt-3 text-slate-600 text-base sm:text-lg">
//               Help AquaHeat identify water and heat problems
//             </p>
//           </div>

//           {/* Main Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//             {/* Left */}
//             <div className="lg:col-span-2">
//               <Panel tone="water">
//                 <ImageUpload
//                   reportData={reportData}
//                   setReportData={setReportData}
//                 />
//               </Panel>
//             </div>

//             {/* Right */}
//             <div className="lg:col-span-3 space-y-6">
//               <Panel tone="water">
//                 <CategorySelector
//                   reportData={reportData}
//                   setReportData={setReportData}
//                 />
//               </Panel>

//               <Panel tone="mix">
//                 <LocationPicker
//                   reportData={reportData}
//                   setReportData={setReportData}
//                   setIsMapOpen={setIsMapOpen}
//                 />
//               </Panel>

//               <Panel tone="heat">
//                 <DescriptionBox
//                   reportData={reportData}
//                   setReportData={setReportData}
//                 />
//               </Panel>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div
//             className="
//             mt-10
//             pt-6
//             border-t
//             border-slate-200/80
//             "
//           >
//             <NavigationButtons onCancel={handleCancel} onNext={handleNext} />
//           </div>
//         </div>
//       </div>

//       <MapModal
//         isMapOpen={isMapOpen}
//         setIsMapOpen={setIsMapOpen}
//         reportData={reportData}
//         setReportData={setReportData}
//       />
//     </div>
//   );
// };

// export default ReportPage;

// import { useState } from "react";

// import ImageUpload from "../../components/report/ImageUpload";
// import CategorySelector from "../../components/report/CategorySelector";
// import LocationPicker from "../../components/report/LocationPicker";
// import MapModal from "../../components/report/MapModal";
// import DescriptionBox from "../../components/report/DescriptionBox";
// import NavigationButtons from "../../components/report/NavigationButtons";

// import { useReport } from "../../context/ReportContext";
// import { useNavigate } from "react-router-dom";

// /* ---------- Small themed helpers (UI only) ---------- */

// const DropIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" aria-hidden="true">
//     <path
//       d="M12 2.5c3.6 4.3 6.5 7.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 10.1 8.4 6.8 12 2.5Z"
//       fill="url(#dropGrad)"
//     />
//     <defs>
//       <linearGradient id="dropGrad" x1="12" y1="2" x2="12" y2="20">
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
//       fill="url(#flameGrad)"
//     />
//     <defs>
//       <linearGradient id="flameGrad" x1="12" y1="2" x2="12" y2="20">
//         <stop stopColor="#fdba74" />
//         <stop offset="1" stopColor="#c2410c" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// /* A section panel with a water→heat accent edge */
// // const Panel = ({ children, tone = "water" }) => {
// //   const accent =
// //     tone === "water"
// //       ? "from-cyan-400 to-sky-600"
// //       : tone === "heat"
// //       ? "from-amber-400 to-orange-600"
// //       : "from-cyan-400 via-sky-500 to-orange-500";

// //   return (
// //     <div
// //       className="
// //       relative
// //       bg-white
// //       rounded-2xl
// //       p-6 pl-7
// //       border
// //       border-slate-200/70
// //       shadow-[0_8px_30px_-12px_rgba(14,116,144,0.25)]
// //       overflow-hidden
// //       transition-shadow
// //       duration-300
// //       focus-within:shadow-[0_12px_36px_-10px_rgba(234,88,12,0.35)]
// //       "
// //     >
// //       <span
// //         className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accent}`}
// //         aria-hidden="true"
// //       />
// //       {children}
// //     </div>
// //   );
// // };

// const Panel = ({ children, tone = "water" }) => {
// const accent =
// tone === "water"
// ? "from-cyan-400 to-sky-500"
// : tone === "heat"
// ? "from-amber-400 to-orange-500"
// : "from-cyan-400 via-sky-400 to-orange-400";

// return ( <div
//    className="
//      relative
//      min-w-0
//      rounded-2xl
//      bg-white
//      p-5
//      sm:p-6
//      border
//      border-slate-200/80
//      shadow-[0_4px_18px_rgba(14,116,144,0.07)]
//      transition-shadow
//      duration-300
//      hover:shadow-[0_8px_24px_rgba(14,116,144,0.11)]
//      focus-within:shadow-[0_8px_24px_rgba(14,116,144,0.12)]
//    "
//  >
// <span
// className={`absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-gradient-to-b ${accent}`}
// aria-hidden="true"
// />
//   {children}
// </div>
// );
// };


// /* ---------- Page ---------- */

// const ReportPage = () => {
//   const { reportData, setReportData } = useReport();

//   const [isMapOpen, setIsMapOpen] = useState(false);

//   const navigate = useNavigate();

//   const handleCancel = () => {
//     console.log("Cancel clicked");
//   };

//   const handleNext = () => {
//     if (!reportData.image) {
//       alert("Please upload an image");
//       return;
//     }

//     if (!reportData.category) {
//       alert("Please select a category");
//       return;
//     }

//     if (!reportData.location) {
//       alert("Please select a location");
//       return;
//     }

//     navigate("/review");
//   };

//   return (
//     <div
//       className="
//       min-h-screen
//       relative
//       overflow-hidden
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
//         max-w-5xl
//         mx-auto
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
//           relative
//           rounded-[26px]
//           bg-white/95
//           p-5
//           sm:p-8
//           lg:p-10
//           "
//         >
//           {/* Header */}
//           <div className="text-center mb-10">
//             <div className="flex items-center justify-center gap-3 mb-4">
//               <span
//                 className="
//                 grid place-items-center
//                 w-12 h-12
//                 rounded-2xl
//                 bg-cyan-50
//                 ring-1 ring-cyan-200
//                 "
//               >
//                 <DropIcon />
//               </span>

//               <span className="h-px w-10 bg-gradient-to-r from-cyan-300 to-orange-300" />

//               <span
//                 className="
//                 grid place-items-center
//                 w-12 h-12
//                 rounded-2xl
//                 bg-orange-50
//                 ring-1 ring-orange-200
//                 "
//               >
//                 <FlameIcon />
//               </span>
//             </div>

//             <h1
//               className="
//               text-3xl
//               sm:text-4xl
//               md:text-5xl
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
//               Report an Environmental Issue
//             </h1>

//             <p className="mt-3 text-slate-600 text-base sm:text-lg">
//               Help AquaHeat identify water and heat problems
//             </p>
//           </div>

//           {/* Main Layout */}
//           {/* <div className="grid grid-cols-1 lg:grid-cols-5 gap-8"> */}
//           <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5 lg:gap-7">
//             {/* Left */}
//             <div className="lg:col-span-2">
//               <Panel tone="water">
//                 <ImageUpload
//                   reportData={reportData}
//                   setReportData={setReportData}
//                 />
//               </Panel>
//             </div>

//             {/* Right */}
//             <div className="lg:col-span-3 space-y-6">
//               <Panel tone="water">
//                 <CategorySelector
//                   reportData={reportData}
//                   setReportData={setReportData}
//                 />
//               </Panel>

//               <Panel tone="mix">
//                 <LocationPicker
//                   reportData={reportData}
//                   setReportData={setReportData}
//                   setIsMapOpen={setIsMapOpen}
//                 />
//               </Panel>

//               <Panel tone="heat">
//                 <DescriptionBox
//                   reportData={reportData}
//                   setReportData={setReportData}
//                 />
//               </Panel>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div
//             className="
//             mt-10
//             pt-6
//             border-t
//             border-slate-200/80
//             "
//           >
//             <NavigationButtons onCancel={handleCancel} onNext={handleNext} />
//           </div>
//         </div>
//       </div>

//       <MapModal
//         isMapOpen={isMapOpen}
//         setIsMapOpen={setIsMapOpen}
//         reportData={reportData}
//         setReportData={setReportData}
//       />
//     </div>
//   );
// };

// export default ReportPage;


import { useState } from "react";

import ImageUpload from "../../components/report/ImageUpload";
import CategorySelector from "../../components/report/CategorySelector";
import LocationPicker from "../../components/report/LocationPicker";
import MapModal from "../../components/report/MapModal";
import DescriptionBox from "../../components/report/DescriptionBox";
import NavigationButtons from "../../components/report/NavigationButtons";

import { useReport } from "../../context/ReportContext";
import { useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------
   Styles are written as plain scoped CSS (rp- prefix) instead of
   Tailwind utilities, so a global reset like `* { padding:0; margin:0 }`
   in index.css / App.css can no longer remove the spacing.
------------------------------------------------------------------- */

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

.rp-page {
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
.rp-page *, .rp-page *::before, .rp-page *::after { box-sizing: border-box; }

/* ---------- Background ---------- */
.rp-glow { position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none; }
.rp-glow-heat  { top: -140px; right: -140px; width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(251,191,36,.45), rgba(234,88,12,.22)); }
.rp-glow-water { bottom: -140px; left: -140px; width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(34,211,238,.4), rgba(2,132,199,.2)); }
.rp-wave { position: absolute; left: 0; bottom: 0; width: 100%; height: 160px; pointer-events: none; opacity: .65; }

/* ---------- Card ---------- */
.rp-card-border {
  position: relative; z-index: 1;
  width: 100%; max-width: 1080px; margin: 0 auto;
  padding: 2px; border-radius: 30px;
  background: linear-gradient(90deg, var(--water-1), #7dd3fc 50%, var(--heat-2));
  box-shadow: 0 30px 70px -30px rgba(8,100,140,.35);
}
.rp-card {
  border-radius: 28px;
  padding: 44px 40px 32px;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

/* ---------- Header ---------- */
.rp-header { text-align: center; margin-bottom: 40px; }
.rp-icons { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 18px; }
.rp-chip { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 16px; }
.rp-chip-water { background: #ecfeff; box-shadow: inset 0 0 0 1px #a5f3fc; }
.rp-chip-heat  { background: #fff7ed; box-shadow: inset 0 0 0 1px #fed7aa; }
.rp-line { width: 44px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, #67e8f9, #fdba74); }
.rp-title {
  margin: 0;
  font-size: clamp(2rem, 4.4vw, 3rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.025em;
  background: linear-gradient(90deg, #0891b2, #0284c7 45%, #f97316);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.rp-sub { margin: 12px 0 0; font-size: 1.05rem; color: var(--muted); }

/* ---------- Layout ---------- */
.rp-grid { display: grid; grid-template-columns: 2fr 3fr; gap: 28px; align-items: start; }
.rp-col  { display: flex; flex-direction: column; gap: 20px; min-width: 0; }

/* ---------- Panels ---------- */
.rp-panel {
  position: relative;
  padding: 24px 24px 24px 30px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.25);
  box-shadow: 0 10px 30px -16px rgba(14,116,144,.35);
  overflow: hidden;
  transition: box-shadow .25s ease, transform .25s ease;
}
.rp-panel:hover { transform: translateY(-2px); box-shadow: 0 16px 38px -16px rgba(14,116,144,.42); }
.rp-panel:focus-within { box-shadow: 0 0 0 3px rgba(34,211,238,.25), 0 16px 38px -16px rgba(14,116,144,.42); }
.rp-panel::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 6px;
}
.rp-water::before { background: linear-gradient(180deg, var(--water-1), var(--water-2)); }
.rp-mix::before   { background: linear-gradient(180deg, var(--water-1), #38bdf8 50%, var(--heat-2)); }
.rp-heat::before  { background: linear-gradient(180deg, var(--heat-1), var(--heat-2)); }
.rp-heat:focus-within { box-shadow: 0 0 0 3px rgba(251,146,60,.25), 0 16px 38px -16px rgba(234,88,12,.4); }

/* Generic polish for the content of each child component */
.rp-panel h1, .rp-panel h2, .rp-panel h3, .rp-panel h4 {
  margin: 0 0 16px; font-size: 1.15rem; font-weight: 700; letter-spacing: -0.01em; color: var(--ink);
}
.rp-panel p { margin: 0; }
.rp-panel button {
  padding: 10px 16px;
  border-radius: 12px;
  font-family: inherit; font-weight: 600; cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease, background-color .15s ease, border-color .15s ease;
}
.rp-panel button:hover { transform: translateY(-1px); box-shadow: 0 8px 18px -10px rgba(2,132,199,.55); }
.rp-panel button:active { transform: translateY(0); }
.rp-panel button:focus-visible { outline: 3px solid rgba(34,211,238,.45); outline-offset: 2px; }
.rp-panel textarea {
  display: block; width: 100%; min-height: 130px; padding: 14px 16px;
  border: 1.5px solid #cbd5e1; border-radius: 14px; background: #f8fafc;
  font: inherit; color: var(--ink); resize: vertical; outline: none;
  transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease;
}
.rp-panel textarea:focus { background: #fff; border-color: #f97316; box-shadow: 0 0 0 4px rgba(249,115,22,.15); }
.rp-panel textarea::placeholder { color: #94a3b8; }
.rp-panel img, .rp-panel video { max-width: 100%; border-radius: 12px; }

/* ---------- Bottom buttons ---------- */
.rp-actions { margin-top: 36px; padding-top: 24px; border-top: 1px solid rgba(148,163,184,.3); }
.rp-actions > div { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; }
.rp-actions button {
  padding: 12px 28px; border-radius: 14px; font-family: inherit; font-size: 1rem; font-weight: 700;
  cursor: pointer; transition: transform .15s ease, box-shadow .2s ease, filter .2s ease, background-color .2s ease;
}
.rp-actions button:first-of-type {
  background: #fff; color: #0e7490; border: 1.5px solid #a5f3fc;
}
.rp-actions button:first-of-type:hover { background: #ecfeff; border-color: #22d3ee; transform: translateY(-1px); }
.rp-actions button:last-of-type {
  color: #fff; border: 0;
  background: linear-gradient(90deg, #0891b2, #0284c7 50%, #f97316);
  box-shadow: 0 12px 24px -12px rgba(2,132,199,.7);
}
.rp-actions button:last-of-type:hover { filter: brightness(1.08); transform: translateY(-1px); box-shadow: 0 16px 28px -12px rgba(249,115,22,.6); }
.rp-actions button:focus-visible { outline: 3px solid rgba(251,146,60,.5); outline-offset: 3px; }

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .rp-grid { grid-template-columns: 1fr; }
  .rp-card { padding: 32px 20px 24px; }
}
@media (max-width: 520px) {
  .rp-page { padding: 24px 12px 100px; }
  .rp-panel { padding: 20px 18px 20px 24px; }
  .rp-actions > div { flex-direction: column-reverse; align-items: stretch; }
}
`;

/* ---------- Icons ---------- */

const DropIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
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
const Panel = ({ children, tone = "water" }) => (
  <div className={`rp-panel rp-${tone}`}>{children}</div>
);

/* ---------- Page ---------- */

const ReportPage = () => {
  const { reportData, setReportData } = useReport();

  const [isMapOpen, setIsMapOpen] = useState(false);

  const navigate = useNavigate();

  const handleCancel = () => {
    setReportData({
      media: [],
      category: "",
      location: null,
      description: "",
    });
  };

  const handleNext = () => {
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
    <div className="rp-page">
      <style>{styles}</style>

      {/* Background */}
      <div className="rp-glow rp-glow-heat" />
      <div className="rp-glow rp-glow-water" />

      <svg
        className="rp-wave"
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
      <div className="rp-card-border">
        <div className="rp-card">
          {/* Header */}
          <div className="rp-header">
            <div className="rp-icons">
              <span className="rp-chip rp-chip-water">
                <DropIcon />
              </span>
              <span className="rp-line" />
              <span className="rp-chip rp-chip-heat">
                <FlameIcon />
              </span>
            </div>

            <h1 className="rp-title">Report an Environmental Issue</h1>

            <p className="rp-sub">
              Help AquaHeat identify water and heat problems
            </p>
          </div>

          {/* Main Layout */}
          <div className="rp-grid">
            {/* Left */}
            <div className="rp-col">
              <Panel tone="water">
                <ImageUpload
                  reportData={reportData}
                  setReportData={setReportData}
                />
              </Panel>
            </div>

            {/* Right */}
            <div className="rp-col">
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
          <div className="rp-actions">
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