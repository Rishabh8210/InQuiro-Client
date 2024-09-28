"use client"
import { z } from 'zod'
import { useState } from "react";
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    username: z.string().min(6, 'Username is too short').max(30, 'Username is too long'),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, 'Password must be atleast 6 characters').max(50, 'Password is too long'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
})

// Or you can simply create an inputData interface or typr using name, usename, email, password, confirmPassword... 
// currently using cleaner way to do this

// Infers the form data type from Zod schema
type FormData = z.infer<typeof formSchema>; 

export function SignupComponent() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState<Partial<FormData>>({});

    // handleChange function to update formData
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    //  Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // parse and validate form data
        const response = formSchema.safeParse(formData);

        if(!response.success){
            const formDataErrors: Partial<FormData> = {};
            response.error.errors.forEach((error) => {
                const name = error.path[0] as keyof FormData;
                formDataErrors[name] = error.message
            })
            setErrors(formDataErrors);
        } else{
            setErrors({});
            // console.log("Form data submitted", formData);
            router.push('/signin');
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="h-fit w-full flex flex-col justify-center items-center flex-shrink-0 gap-3">
                <div className='h-fit w-full flex flex-col gap-1'>
                    <input 
                        className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" 
                        type="text"
                        name='name'
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange} 
                    />
                    {errors.name && <p className='text-xs text-red-600 font-medium'>{errors.name}</p>}
                </div>
                <div className='h-fit w-full flex flex-col gap-1'>
                    <input 
                        className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" 
                        type="text" 
                        name='username'
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className='text-xs text-red-600 font-medium'>{errors.username}</p>}
                </div>
                <div className='h-fit w-full flex flex-col gap-1'>
                    <input 
                        className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" 
                        type="email"
                        name='email'
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='text-xs text-red-600 font-medium'>{errors.email}</p>}
                </div>
                <div className='h-fit w-full flex flex-col gap-1'>
                    <input 
                        className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" 
                        type="password" 
                        name='password'
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='text-xs text-red-600 font-medium'>{errors.password}</p>}
                </div>
                <div className='h-fit w-full flex flex-col gap-1'>
                    <input 
                        className="h-10 w-full outline-none focus:outline-zinc-500 rounded-md px-3 bg-zinc-800" 
                        type="password" 
                        name='confirmPassword'
                        placeholder="Confirm password" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className='text-xs text-red-600 font-medium'>{errors.confirmPassword}</p>}
                </div>
                <button className="bg-red-600 w-2/4 h-10 rounded-md text-lg font-bold">Sign up</button>
            </div>
        </form>
    )
}
