import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 ">
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl">
    ⭐
  </div>

  <div>
    <h1 className="text-2xl font-bold text-blue-700">
      lilStars
    </h1>

    <p className="text-sm text-gray-500">
      Daycare Center
    </p>
  </div>
</div>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-blue-600">
  Home
</a>

<a href="#" className="hover:text-blue-600">
  About
</a>

<a href="#" className="hover:text-blue-600">
  Programs
</a>

<a href="#" className="hover:text-blue-600">
  Contact
</a>
 <Link href="/login" className="rounded-full border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white">
        Login
        </Link>

         <Link href="/register" className="rounded-full border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white">
        Register
        </Link>
        </div>

       
      </nav>
      
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
            href="#" 
            className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Explore Programs
          </Link>
        </div>
      </section>
      

      
    
</main>
  );
}