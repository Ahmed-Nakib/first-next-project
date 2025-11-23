"use client";

export default function Dashboard() {

  const logout = () => {
    localStorage.removeItem("admin-token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="flex gap-4">
        <a href="/admin/products" className="bg-green-600 text-white p-3 rounded">
          Manage Products
        </a>

        <button onClick={logout} className="bg-red-600 text-white p-3 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}
