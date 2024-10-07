"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from 'zod'

import { NEXT_BACKEND_URL, AUTH_SIGN_IN_URL } from "@/constant/ResourceUrls";
import axios from "axios";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password is too small').max(50, 'Password is too long')
})

type FormData = z.infer<typeof formSchema>

export function SigninComponent() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    })    

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = formSchema.safeParse(formData);
        if(!response.success){
            const formDataErrors: Partial<FormData> = {};
            response.error.errors.forEach((error) => {
                const name = error.path[0] as keyof FormData;
                formDataErrors[name] = error.message
            })
            setErrors(formDataErrors);
        } else {
            console.log("Submitted successfully", formData);
            setErrors({});
            const url = NEXT_BACKEND_URL + AUTH_SIGN_IN_URL;
            try {
                const response = await axios.post(url, formData)
                if(response.data.success){
                    localStorage.setItem('token', response.data.data);
                    router.push('/')
                } else{
                    
                }
            } catch(error){
                console.log("Something went wrong", error);
                alert("Something went wrong")
            }
        }
    }

    useEffect(()=> {
        const token = localStorage.getItem('token');
        if(token){
            router.push('/')
        }
    }, [router])

    return (
        <form onSubmit={handleSubmit}>
            <div className="h-fit w-full flex flex-col justify-center items-center flex-shrink-0 gap-5">
                <div>
                    <input
                        type="text"
                        className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800"
                        name='email'
                        value={formData.email}
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-xs text-red-600 font-semibold">{errors.email}</p>}
                </div>
                <div>
                    <input 
                        type="password"
                        className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800"
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-xs text-red-600 font-semibold">{errors.password}</p>}
                </div>
                <button className="bg-red-600 w-2/4 h-10 rounded-md text-lg font-bold">Sign in</button>
            </div>
        </form>
    )
}