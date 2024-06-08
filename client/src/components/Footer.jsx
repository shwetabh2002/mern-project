import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="/mnt/data/ftr.JPG" alt="Flabs Logo" className="mb-4" />
            <address className="not-italic mb-4">
              Plot No-20, Knowledge Park 2,<br />
              IIT Roorkee Extension Centre, Tides Incubator,<br />
              Greater Noida - 203106
            </address>
            <p className="mb-4">M: +91 8929759545</p>
            <p className="mb-4">hello@flabs.in</p>
            <p>Product By: Diagnoshuttle Private Limited</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com" aria-label="Instagram" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.website.com" aria-label="Website" className="text-white">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Login</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Investor Relations</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Get Records</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Get a Demo</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Report Formats</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Create ABHA</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Radiology Software (RIS)</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Radiology Report format</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Flabs Vs. Labsmart</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Flabs Vs. Drlogy</a></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blogs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cancellation & Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"
              required
            />
            <div className="flex space-x-2">
              <select className="p-2 border border-gray-300 rounded bg-black text-white">
                <option value="IN">IN +91</option>
                {/* Add other country codes here if needed */}
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 p-2 border border-gray-300 rounded bg-black text-white"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Id"
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"
              required
            />
            <input
              type="text"
              placeholder="Lab Name"
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-white text-black font-bold rounded hover:bg-gray-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
