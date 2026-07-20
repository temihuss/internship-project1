export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-2xl mx-auto">
      <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
        Contact Us
      </span>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
        We'd Love to Hear From You
      </h1>
      <p className="mt-4 text-slate-600">
        Have questions about enrollment, tours, or pricing? Send us a message!
      </p>

      {/* Simple Form Preview */}
      <form className="mt-8 w-full flex flex-col gap-4 text-left">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
          <input 
            type="text" 
            placeholder="Your name" 
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input 
            type="email" 
            placeholder="you@example.com" 
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button 
          type="button" 
          className="w-full mt-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 shadow-md text-center"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}