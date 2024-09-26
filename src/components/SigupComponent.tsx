"use client"
import { useState } from "react";

export function SignupComponent() {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    return (
        <form onSubmit={(e) => e.preventDefault()} className="h-fit w-full flex flex-col justify-center items-center flex-shrink-0 gap-5">
            <input className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
            <input className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <input className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button className="bg-red-600 w-2/4 h-10 rounded-md text-lg font-bold">Sign up</button>
        </form>
    )
}