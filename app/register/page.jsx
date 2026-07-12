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
        router.push('/login');
    };

    return(
        <div>
            <h1>Create a New Account</h1>

            <form onSubmit={handleRegister}>

                <div>
                    <label>Full Name: </label>
                    <input type="text"
                           value={name}
                           onChange={(e) =>setName(e.target.value)}
                           required />
                </div>

                 <div>
                    <label>Email: </label>
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required />
                </div>

                 <button type="submit">Register</button>
            </form>

            <div>
                <p>Already have an account? <Link href="/login">Login here</Link></p>
            </div>
        </div>
    );
}