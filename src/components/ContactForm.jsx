import React from "react";

export default function ContactForm() {
  return (
    <section className="bg-gray-100 py-16"  id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
   <form className="space-y-6">
  {/* Name + Email (side by side on large screens) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Name */}
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>

  {/* Subject */}
  <div>
    <label
      htmlFor="subject"
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      placeholder="Subject"
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="5"
      placeholder="Write your message..."
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
  >
    Send Message
  </button>
</form>

          </div>

          {/* Right side - Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799139747!2d-74.25987568799927!3d40.69767006369001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b9b7d46a2d%3A0xc80b8f06e177fe62!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1692357319012!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
