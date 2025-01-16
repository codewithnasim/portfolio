import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import con from "../assets/contact.avif";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to the console

    // Show a confirmation message or display the data
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Hero Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-white opacity-80">
              We’d love to hear from you! Whether you have a question or want
              to work together, feel free to reach out.
            </p>
          </div>

          <div className="flex justify-center items-center mt-12 lg:mt-0">
            <img
              alt="Contact us"
              className="max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg object-cover"
              src={con}
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12">
          <div className=" bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="first_name"
                    name="firstName"
                    type="text"
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="lastName"
                    type="text"
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone_number"
                  name="phoneNumber"
                  type="tel"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                id="btn"
                className="w-full py-3 px-6 mt-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {submitted ? "Request Submitted Successfully" : "Send Message"}
              </button>
            </form>

            {submitted && (
              <div className="mt-4 text-center text-lg text-gray-700">
                <p>Thank you for your submission, {formData.firstName}!</p>
                <p>We will get back to you at {formData.email} soon.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center text-white">
          <p>
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
