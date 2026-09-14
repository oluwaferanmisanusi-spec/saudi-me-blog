"use client";

import React, { useState } from "react";

// Define what a form submission looks like
interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export default function ContactForm() {
  // 1. Form state variables
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. Handle typing into the inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle clicking the "GET IN TOUCH" button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new data object with a unique timestamp ID
    const newSubmission: ContactSubmission = {
      id: Date.now().toString(),
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    try {
      // Pull existing list from localStorage or start fresh
      const existingSubmissionsRaw = localStorage.getItem(
        "local_form_submissions",
      );
      const existingSubmissions: ContactSubmission[] = existingSubmissionsRaw
        ? JSON.parse(existingSubmissionsRaw)
        : [];

      // Add the new submission to the list
      existingSubmissions.push(newSubmission);

      // Save the updated list back to localStorage
      localStorage.setItem(
        "local_form_submissions",
        JSON.stringify(existingSubmissions),
      );

      // Toggle the view to show the success message
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to save form data to localStorage:", error);
      alert("Something went wrong saving your message locally!");
    }
  };

  // --- Success View ---
  if (isSubmitted) {
    return (
      <div className="w-full max-w-[1000px] mx-auto bg-[#F8F9FD] p-12 md:p-16 min-h-[500px] flex items-center justify-center">
        <p className="text-[#333333] text-lg font-medium text-center max-w-md leading-relaxed">
          Thank you for getting in touch, you will receive an email back within
          two days.
        </p>
      </div>
    );
  }

  // --- Form View ---
  return (
    <div className="w-full max-w-[1000px] mx-auto bg-[#F8F9FD] p-8 md:p-16 rounded-sm shadow-sm font-sans">
      <p className="text-xs text-gray-500 mb-8">
        Fields marked with an <span className="text-red-500">*</span> are
        required
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-bold text-gray-800 mb-2"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-white border border-transparent rounded-sm px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-600 transition-colors shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-bold text-gray-800 mb-2"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-white border border-transparent rounded-sm px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-600 transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Row 2: Email & Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-800 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-transparent rounded-sm px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-600 transition-colors shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-bold text-gray-800 mb-2"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white border border-transparent rounded-sm px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-600 transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Row 3: Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-gray-800 mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white border border-transparent rounded-sm px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-600 resize-none transition-colors shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-[#469551] text-white text-xs font-bold tracking-wider px-6 py-3.5 rounded-full hover:bg-[#3b7e44] uppercase transition-colors duration-200 cursor-pointer shadow-sm"
          >
            Get in touch
          </button>
        </div>
      </form>
    </div>
  );
}
