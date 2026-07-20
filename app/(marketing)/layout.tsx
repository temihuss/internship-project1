import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <div className="min-h-screen bg-slate-50 font-serif">
      
      <nav className="flex items-center justify-between px-10 py-6 bg-white/50 backdrop-blur-sm border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-2xl">
            ⭐
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-700">lilStars</h1>
            <p className="text-sm text-gray-500">Daycare Center</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/programs" className="hover:text-blue-600">
            Programs
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>

          <Link
            href="/login"
            className="rounded-full border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-full border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Register
          </Link>
        </div>
      </nav>

      
      {children}
    </div>
  );
}