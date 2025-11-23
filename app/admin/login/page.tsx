"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [token, setToken] = useState("");

  const login = () => {
    if (!token) return alert("Enter token first!");

    localStorage.setItem("admin-token", token);
    window.location.href = "/admin/dashboard";
  };

  return (
    <div className="max-w-sm mx-auto mt-40 space-y-4">
      <h1 className="text-2xl font-bold">Admin Login</h1>

      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Enter Admin Token"
        onChange={(e) => setToken(e.target.value)}
      />

      <button onClick={login} className="bg-blue-600 text-white p-2 w-full">
        Login
      </button>
    </div>
  );
}
