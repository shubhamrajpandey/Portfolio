import React from "react";

function ContactForm() {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-10">
          Get in <span className="font-bold text-black dark:text-green-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700 dark:text-gray-300">shubhamrajpandey@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700 dark:text-gray-300">+977-9841234567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 w-full">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-green-500 dark:focus:border-green-400 bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-green-500 dark:focus:border-green-400 bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-green-500 dark:focus:border-green-400 bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black dark:bg-green-500 text-white dark:text-black px-6 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-green-400 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
