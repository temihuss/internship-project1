import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
      <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
        Now enrolling for Fall 2026!
      </span>
      <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:text-6xl">
        Where Little Stars Shine <br />
        <span className="text-blue-600">Brightest Every Day</span>
      </h2>
      <p className="mt-6 text-lg text-slate-600 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste possimus ex, eos expedita voluptates fugit quam placeat! Quae fuga aliquam deleniti, nam non rerum nihil unde aspernatur nobis obcaecati.
      </p>
      <div className="mt-10 flex gap-4">
        <Link 
          href="/register" 
          className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition duration-150 hover:bg-blue-700 shadow-lg shadow-blue-200"
        >
          Book a Virtual Tour
        </Link>
        <Link 
          href="/programs" 
          className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-700 transition hover:bg-slate-50"
        >
          Explore Programs
        </Link>
      </div>
    </section>
  );
}