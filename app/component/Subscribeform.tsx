"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubscribed(true);
  }

  if (isSubscribed) {
    return (
      <div className="bg-white rounded-[0.9375rem] px-6 py-3 text-center font-semibold text-[#5a9a5a]">
        You have successfully subscribed
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
      <div className="flex items-center bg-white rounded-[0.9375rem] overflow-hidden shadow-[0_0_24px_10px_rgba(53,70,233,0.07)] max-w-[600px]  h-[73px] hover:outline-1 hover:outline-brand-secondary focus-within:outline-1 focus-within:outline-brand-secondary">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-5 py-3 outline-none text-lg max-sm:px-3 "
        />
        <button
          type="submit"
          className="bg-[#5a9a5a] hover:bg-[#497c49] active:bg-[#497c49] text-white text-sm font-semibold px-6 py-3 rounded-full m-[18.23px] max-sm:px-4 cursor-pointer"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-red-500 text-sm px-2">{error}</p>}
    </form>
  );
}
