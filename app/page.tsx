"use client";
import React, { useState } from "react";

type User = {
  username: string;
  email: string;
  age: number;
  country: string;
  isActive: boolean;
};

export default function Page() {
  const allUsers: User[] = [
    {
      username: "Mulan",
      email: "mulan@gmail.com",
      age: 22,
      country: "Switzerland",
      isActive: true,
    },
    {
      username: "Roman",
      email: "roman@gmail.com",
      age: 28,
      country: "Canada",
      isActive: false,
    },
    {
      username: "Molex",
      email: "molex@gmail.com",
      age: 19,
      country: "Japan",
      isActive: true,
    },
    {
      username: "Skyki",
      email: "skyki@gmail.com",
      age: 30,
      country: "Iceland",
      isActive: false,
    },
    {
      username: "Piñez",
      email: "pinez@gmail.com",
      age: 25,
      country: "Paris",
      isActive: true,
    },
    {
      username: "Precious",
      email: "precious@gmail.com",
      age: 23,
      country: "New York",
      isActive: true,
    },
    {
      username: "Josephine",
      email: "josephine@gmail.com",
      age: 60,
      country: "Denmark",
      isActive: false,
    },
    {
      username: "Antonio",
      email: "antonio@gmail.com",
      age: 56,
      country: "China",
      isActive: true,
    },
    {
      username: "Sachia",
      email: "sachia@gmail.com",
      age: 20,
      country: "Hawaii",
      isActive: true,
    },
    {
      username: "Harry",
      email: "harry@gmail.com",
      age: 31,
      country: "USA",
      isActive: false,
    },
  ];

  const [users, setUsers] = useState<User[]>([]);

  const handleAdd = () => {
    if (users.length < allUsers.length) {
      setUsers((prev) => [...prev, allUsers[prev.length]]);
    }
  };

  const handleRemove = (index: number) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          disabled={users.length >= allUsers.length}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Add
        </button>
        <div className="self-center text-sm text-gray-600">
          {users.length}/{allUsers.length} added
        </div>
      </div>

      <table className="table-auto border-collapse border border-gray-300 w-full max-w-5xl">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Username
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Country
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                {user.username}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.age}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.country}
              </td>
              <td className="border border-gray-300 px-4 py-2 relative">
                <span>{user.isActive ? "✅ Active" : "❌ Inactive"}</span>
                <button
                  onClick={() => handleRemove(i)}
                  aria-label={`Remove ${user.username}`}
                  className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center hover:bg-red-600"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
