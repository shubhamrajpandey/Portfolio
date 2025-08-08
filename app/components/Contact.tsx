import React from "react";

function ContactForm() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-10">
          Get in <span className="font-bold">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
      
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700">shubhamrajpandey@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">+977-9841234567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-700">Kathmandu, Nepal</p>
            </div>
          </div>

          <form className="space-y-6 w-full">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-300"
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
