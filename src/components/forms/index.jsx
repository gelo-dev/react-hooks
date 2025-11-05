import React, { useState } from "react";

export const MyForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    };

    return (
    <div className="flex items-center justify-center min-h-screen .bg-gradient-to-br from-blue-500 to-indigo-600">
        <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm"
        >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back 👋
        </h2>

        <div className="mb-4">
            <label className=" text-fuchsia-900 font-medium mb-2">
            Email Address
            </label>
            <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
            Password
            </label>
            <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition"
        >
            Log In
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
            Sign up
            </a>
        </p>
        </form>
    </div>
    );
    };
