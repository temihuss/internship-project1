'use client';

import Link from 'next/link';
import { useState} from 'react';
import {useRouter} from 'next/navigation';

export default function RegisterPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();
        
        console.log("--- New User Registration ---")
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        alert("Registration successful! Check your console. Redirecting to login...");
        router.push('/dashboard');
    };

    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className='text-center font-bold text-gray-800 text-2xl mb-6'>Create a New Account</h1>

            <form onSubmit={handleRegister} className='space-y-4 '>

                <div>
                    <label className='block font-bold text-sm text-gray-700 mb-2'>Full Name: </label>
                    <input type="text"
                           value={name}
                           onChange={(e) =>setName(e.target.value)}
                           required 
                           className='w-full border border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 '/>
                </div>

                 <div>
                    <label className='block font-bold text-sm text-gray-700 mb-2'>Email: </label>
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full border border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 '/>
                </div>

                <div>
                    <label className='block font-bold text-sm text-gray-700 mb-2'>Password: </label>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required 
                           className='w-full border border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 '/>
                </div>

                 <button type="submit" className="w-full border font-bold my-2 p-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition-colors transition-transform  active:translate-y-0.5">Register</button>
            </form>

            <div className='mt-6'>
                <p className='text-gray-600 text-center text-sm '>Already have an account? <Link href="/login" className="text-blue-600 hover:underline font-semibold">Login here</Link></p>
            </div>
        </div>
        </div>
    );
}