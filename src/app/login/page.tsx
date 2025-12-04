"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      alert("Login successful!");
      console.log()
      router.push("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          <i className="fa-solid fa-chart-column text-3xl"></i>
          <br />
            Community Disaster Response Network
        </h2>

        <div className="flex justify-center mt-6 gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg bg-gray-300 text-gray-900 font-semibold"
          >
            Register
          </Link>
        </div>

        <h5 className="text-center text-lg font-medium mt-6 text-gray-700">
          Welcome Back
        </h5>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email / Username</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> Remember me
            </label>
            <Link href="/forgot-password" className="text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://www.google.com" className="text-red-500 hover:scale-110 transition">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="https://github.com" className="text-gray-700 hover:scale-110 transition">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-blue-700 hover:scale-110 transition">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <p className="text-center mt-6 text-gray-700">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-indigo-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
