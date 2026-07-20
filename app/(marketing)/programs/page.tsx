import Link from "next/link";

export default function ProgramsPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
      <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
        Our Programs
      </span>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">
        Designed for Every Stage of Growth
      </h1>
      
      {/* Quick Cards to show off content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-3xl mb-2">👶</div>
          <h3 className="text-xl font-bold text-slate-800">Infants</h3>
          <p className="text-sm text-slate-500 mt-2">6 weeks – 12 months</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-3xl mb-2">🧸</div>
          <h3 className="text-xl font-bold text-slate-800">Toddlers</h3>
          <p className="text-sm text-slate-500 mt-2">1 – 3 years</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-3xl mb-2">🎨</div>
          <h3 className="text-xl font-bold text-slate-800">Preschool</h3>
          <p className="text-sm text-slate-500 mt-2">3 – 5 years</p>
        </div>
      </div>
    </section>
  );
}