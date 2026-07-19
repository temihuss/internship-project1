import React from "react";
import Link from "next/link";

interface DashboardLayoutProps{
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps){
    return(
        <div className="min-h-screen bg-slate-100 flex flex-col  font-serif">
            <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-20">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-12 w-12 bg-blue-600 rounded-full text-2xl flex items-center justify-center">⭐</div>
                    <div>
                         <h1 className="font-bold text-2xl text-blue-600 ">lilStars</h1>
                    <p className="text-gray-500 text-sm">Daycare center</p>
                    </div>
                    <div className="text-4xl font-bold text-blue-600">Admin</div>
                </div>

                <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-600">Term: Fall 2026</span>
          <div>Tesnim</div>
          <span className="h-9 w-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
            T
          </span>
        </div>
            </header>

            <div className="flex flex-1">
                <aside className="w-64 bg-blue-600 text-white flex flex-col p-4 space-y-2 sticky top-16 h-[calc(100vh-4rem)]">
  <Link
    href="/dashboard"
    className="px-3 py-2 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold"
  >
    Dashboard
  </Link>

  <Link
    href="/dashboard/parents"
    className="px-3 py-2 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold"
  >
    Parents
  </Link>

  <Link
    href="/dashboard/staff"
    className="px-3 py-2 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold"
  >
    Staff
  </Link>

  <Link
    href="/dashboard/attendance"
    className="px-3 py-2 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold"
  >
    Attendance
  </Link>

  <Link
    href="/dashboard/settings"
    className="px-3 py-2 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold"
  >
    Settings
  </Link>
</aside>

                    <main className="flex-1 p-8 bg-slate-50">
                {children}
            </main>
            </div>
            
            
        </div>
        
    );
}