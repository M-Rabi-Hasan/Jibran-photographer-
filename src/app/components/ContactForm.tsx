"use client"; // Next.js use-client directive
import { useState } from "react";
import Image from "next/image"; // Importing the Next.js Image component

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    setResponseMessage(result.message);
  };

  return (
    <div className="flex p-10 justify-center items-center min-h-screen bg-black">
      <div className="flex max-w-5xl bg-white shadow-lg">
        {/* Left Side (Image) */}
        <div className="hidden md:block">
          <Image
            src="/images/6.jpeg" // Path to your image
            alt="Photographer"
            width={500} // Specified width for optimized rendering
            height={750} // Specified height for optimized rendering
            className="h-full object-cover"
            priority // Ensures image is loaded immediately
          />
        </div>
        {/* Right Side (Form) */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center">Get In Touch</h1>
          <p className="text-sm mb-8 text-center">
            If you want to get in touch you can email me at
            <a href="mailto:tom@entertainment720.com" className="text-blue-500">
              {" "}tom@entertainment720.com
            </a>{" "}
            or fill out the contact form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded h-28"
            />
            <button type="submit" className="w-full border-2 border-black text-black py-2 rounded">
              Contact
            </button>
          </form>
          {responseMessage && <p className="mt-4 text-center text-green-600">{responseMessage}</p>}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 uppercase">Featured On</p>
            <div className="flex justify-center items-center space-x-4 mt-2">
              <Image
                src="/images/6.jpeg" // Path to another logo
                alt="Logo 1"
                width={150}
                height={400}
                className="h-6"
              />
              <Image
                src="/images/7.jpeg" // Path to another logo
                alt="Logo 2"
                width={150}
                height={400}
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
