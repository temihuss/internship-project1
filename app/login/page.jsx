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

    alert("Check your browser console for data! Redirecting to Home...");
    router.push('/');
    };

    return(
        <div>
            <h1>Login to Your Account</h1>

            <form onSubmit={handleLogin}>
                
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

                <button type="submit">Login</button>
            </form>

            <div>
                <p>Don't have an account? <Link href="/register">Register Here</Link></p>
            </div>
        </div>
    );
}