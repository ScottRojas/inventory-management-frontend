import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const departmentOptions = [
        "Warehouse",
        "Maintenance",
        "Operations",
        "Quality",
        "HSE",
        "Engineering",
        "Facilities",
        "Grounds",
        "Housekeeping",
        "Temporary",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log({ name, email, department, password });
        // Perform API call or form submission here
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mx-auto sm:px-3 md:px-0 mt-6 md:mt-12">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className={"text-center text-2xl font-bold"}>Register Here</h1>

                <div className={"mb-4"}>
                    <label
                        htmlFor="name"
                        className={"block text-gray-500 text-sm font-bold"}>Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Enter your name"}
                        className={"border-2 border-gray-100 p-2 w-full rounded-md outline-none"}
                        type="text"/>
                </div>

                <div className={"mb-4"}>
                    <label
                        htmlFor="email"
                        className={"block text-gray-500 text-sm font-bold"}>Email</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={"Enter your company email"}
                        className={"border-2 border-gray-100 p-2 w-full rounded-md outline-none"}
                        type="email"/>
                </div>

                <div className={"mb-4"}>
                    <label
                        htmlFor="department"
                        className={"block text-gray-500 text-sm font-bold"}>Department</label>
                    <select
                        value={department}
                        onChange={e => setDepartment(e.target.value)}
                        className={"border-2 border-gray-100 p-2 w-full rounded-md outline-none"}>
                        <option value="">Select your department</option>
                        {departmentOptions.map((dept, index) => (
                            <option key={index} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>

                <div className={"mb-4"}>
                    <label
                        htmlFor="password"
                        className={"block text-gray-500 text-sm font-bold"}>Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={"Enter your password"}
                        className={"border-2 border-gray-100 p-2 w-full rounded-md outline-none"}
                        type="password"/>
                </div>

                <div className={"mb-4"}>
                    <label
                        htmlFor="confirmPassword"
                        className={"block text-gray-500 text-sm font-bold"}>Confirm Password</label>
                    <input
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder={"Confirm your password"}
                        className={"border-2 border-gray-100 p-2 w-full rounded-md outline-none"}
                        type="password"/>
                </div>

                <button type="submit" className={"px-5 bg-blue-500 p-2 rounded-2xl text-slate-100"}>
                    Submit
                </button>

                <div className="py-2 text-lg font-bold text-gray-400 cursor-pointer">
                    <p>
                        Already have an account? <Link to="/login" className={"text-blue-600 ml-2 hover:underline"}>Log in</Link>
                    </p>
                </div>
            </form>
        </motion.div>
    );
};

export default Register;
