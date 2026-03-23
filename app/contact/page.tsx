"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Call or email us with any questions about electronics, laptops, repairs, or perfumes.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-200">
            <li><strong>Phone:</strong> +263 771 156 022 / +27 81 233 4480</li>
            <li><strong>Email:</strong> info@tymostore.com</li>
            <li><strong>Address:</strong> Chiramba Complex, Zimbabwe</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12 w-full h-64 rounded-lg overflow-hidden">
        <iframe
          title="Tymo Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12611.678!2d31.047!3d-17.824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19411d3d0191f9c7%3A0x123456789abcdef!2sChiramba+Complex%2C+Zimbabwe!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </main>
  );
}
