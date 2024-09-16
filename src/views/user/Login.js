// Login.js
import React, { useState } from 'react';
import {motion} from "framer-motion"
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., validation
        console.log({ email, password });
        // Perform API call or form submission here
    };

    return (
        <motion.div
            initial={{opacity: 0 , x: -100 }}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="mx-auto sm:px-3 md:px-0 mt-6 md:mt-12">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className={"tect-center text-2xl font-bold"}>Sign in</h1>
                <div className={"mb-4"}>
                    <label
                        htmlFor="email"
                        className={"block text-gray-500 text-sm font-bold"}>Email</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={"Enter your login email"} className={"border-2 border-gray-100 p-2 w-full rounded-md outline-none"} type="email"/>
                </div>

                <div className={"mb-4"}>
                    <label
                        htmlFor="password"
                        className={"block text-gray-500 text-sm font-bold"}>Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={"Enter your password"} className={"border-2 border-gray-100 p-2 w-full rounded-md outline-none"} type="password"/>
                </div>

                <button type="submit" className={"px-5 bg-blue-500 p-2 rounded-2xl text-slate-100"}>
                    Log in
                </button>
                <div className="py-2 text-lg font-bold text-gray-400 cursor-pointer">
                    <p>
                        No account? <Link to="/register" className={"text-blue-600 ml-2 hover:underline"}>Register</Link>
                    </p>
                </div>
            </form>
        </motion.div>
    );
};

export default Login;