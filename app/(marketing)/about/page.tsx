import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-3xl mx-auto">
      <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
        About Us
      </span>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
        Nurturing Tomorrow's Leaders Today
      </h1>
      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        At lilStars Daycare, we provide a safe, engaging, and loving environment where children learn, play, and grow. Our certified educators are dedicated to helping every child shine!
      </p>
      <div className="mt-8">
        <Link 
          href="/contact" 
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 shadow-md"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}