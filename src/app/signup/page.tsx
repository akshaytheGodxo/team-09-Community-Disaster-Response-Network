"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";

function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<"user" | "admin">("user");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role })
      })

      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(data.error || "Signup failed!");
      }

      alert("Account created successfully! Please login.");
      window.location.href = "/login";
    } catch (err: any) {
      alert(err.response?.data?.message || "Signup failed!");
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

        <div className="flex justify-center mt-6 gap-4 text-black">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-gray-300 text-gray-900 font-semibold"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold"
          >
            Register
          </Link>
        </div>

        <h5 className="text-center text-lg font-medium mt-6 text-gray-700">
          Create an Account
        </h5>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "user" | "admin")}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              name="role"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
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
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
