"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");

  const generatePassword = () => {
    const length = 16;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(result);
  };

  const generateKey = () => {
    const length = 32;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setKey(result);
  };

  return (
    <main className="container mx-auto p-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-semibold">PassKey</h1>

      <div className="space-x-2 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={generatePassword}
          type="button"
        >
          Generate Password
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={generateKey}
          type="button"
        >
          Generate Key
        </button>
      </div>

      {password && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <p className="text-lg font-semibold">Generated Password</p>
          <p className="text-xl">{password}</p>
        </div>
      )}

      {key && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <p className="text-lg font-semibold">Generated Key</p>
          <p className="text-xl">{key}</p>
        </div>
      )}
    </main>
  );
}
