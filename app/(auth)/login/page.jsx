'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter} from 'next/navigation';

export default function LoginPage(){
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

    console.log("Login Attempted!");
    console.log("Email captured:", email);
    console.log("Password captured:", password);

    router.push('/dashboard');
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-200">

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 ">Login to Your Account</h1>

            <form onSubmit={handleLogin} className="space-y-4">
                
                <div>
                    <label className="block text-grey-700 text-sm font-bold mb-2">Email: </label>
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password: </label>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required 
                           className="border w-full px-3 py-2 rounded-md border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"/>
                </div>

                <button type="submit" className="w-full border font-bold my-2 p-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition-colors transition-transform  active:translate-y-0.5">Login</button>
            </form>

            <div className="text-center mt-6">
                <p className="text-sm text-gray-600">Don't have an account? <Link href="/register" className="text-blue-600 hover:underline font-semibold">Register Here</Link></p>
            </div>
        </div>
        </div>
);
}