import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between p-8">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold mb-4">
            Transform your lab with Flabs Pathology software!
          </h1>
          <p className="mb-6">
            Start Your 5-Day Free Trial of Our Pathology Lab Software Today, Just by Entering Your Name and Phone Number Below!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <div className="flex space-x-2">
              <select className="p-2 border border-gray-300 rounded">
                <option value="IN">IN +91</option>
                {/* Add other country codes here if needed */}
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Id"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Lab Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
            >
              GET A DEMO
            </button>
          </form>
          <div className="mt-8 text-center">
            <h2 className="text-lg font-semibold mb-2">BACKED BY</h2>
            <img
              src="/mnt/data/11.JPG"
              alt="Backed By"
              className="h-12 mx-auto"
            />
          </div>
        </div>
        <div className="max-w-2xl mt-8 md:mt-0">
        <iframe 
      src="https://www.youtube.com/embed/W5IfF8ZyMGI" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      className="w-full h-96" 
    ></iframe>
        </div>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Powerful Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Here's all the good stuff
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">Streamlined Lab Operations</h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                With Flabs, you can easily manage patient registration, automate lab analysis, and generate QR coded reports for seamless access and sharing. Flabs integrates with WhatsApp, enabling automated communication and reducing manual efforts. By optimizing processes and minimizing manual tasks, Flabs helps you save time, improve accuracy, and enhance overall lab productivity.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">Enhanced Patient Experience</h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Flabs provides a patient portal where patients can access and download their reports conveniently using their phone number login. This portal empowers patients to stay informed about their health, view their reports anytime, and take necessary actions accordingly.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <i className="fas fa-user-check"></i>
              </div>
              <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">User-Friendly Interface</h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Flabs stands out for its user-friendly interface, making it accessible and intuitive for lab owners, technicians, and doctors. With its well-designed and easy-to-navigate interface, users can quickly familiarize themselves with the software and efficiently perform their tasks. This ensures a seamless user experience and enables labs to maximize their productivity without extensive training or technical expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="mt-4 text-xl leading-6 font-medium text-gray-900">Affordable and Scalable Solution</h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Flabs is designed to be accessible to labs of all sizes, from small labs to larger diagnostic centers. Flabs is also scalable, allowing you to add collection centers and expand your operations as your lab grows.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Your data is <span className="text-blue-600">safe</span> with us!
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-center p-4">
              <img
                src="/mnt/data/14.JPG"
                alt="Your patients are linked only to you"
                className="h-12 mx-auto mb-4"
              />
              <p className="text-gray-600">Your patients are linked only to you</p>
            </div>
            <div className="text-center p-4">
              <img
                src="/mnt/data/14.JPG"
                alt="Secure data backups and disaster recovery options"
                className="h-12 mx-auto mb-4"
              />
              <p className="text-gray-600">Secure data backups and disaster recovery options</p>
            </div>
            <div className="text-center p-4">
              <img
                src="/mnt/data/14.JPG"
                alt="Compliance with industry security standards and regulations"
                className="h-12 mx-auto mb-4"
              />
              <p className="text-gray-600">Compliance with industry security standards and regulations</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our customers say
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-center p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/mnt/data/15.JPG"
                  alt="Customer Testimonial"
                  className="h-12 mx-auto mb-4"
                />
                <p className="text-gray-600">
                  “I have been using the Flabs software for several months now, and it has been a game-changer for my lab. The automated report sending and bill sending features have saved me a lot of time and effort, and I no longer have to worry about manually sending out reports to patients and it also saves the printing cost.”
                </p>
                <p className="text-blue-600 font-semibold mt-4">Nidan Diagnostics</p>
                <p className="text-gray-900 font-bold">Mr. Shubham Kumar</p>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/mnt/data/15.JPG"
                  alt="Customer Testimonial"
                  className="h-12 mx-auto mb-4"
                />
                <p className="text-gray-600">
                  “As a healthcare professional, I highly recommend Flabs LIS software. One of the standout features of this software is its ease of use. Whether you're a lab owner, technician, or doctor, the software's user-friendly design makes it easy to navigate and operate.”
                </p>
                <p className="text-blue-600 font-semibold mt-4">Shwaas Diagnostics</p>
                <p className="text-gray-900 font-bold">Mr. Akshay Kumar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Choose the plan that best for you</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-center p-4 w-full md:w-1/3 lg:w-1/4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
                <p className="text-2xl text-blue-600 font-bold">Basic</p>
                <p className="text-3xl font-bold mt-2">₹458/mo + GST</p>
                <p className="text-gray-500 mt-1">Billed at ₹ 5,500+ GST every year</p>
                <p className="text-gray-500 mt-1">up-to 6000 patients every year</p>
                <p className="text-gray-500 mt-1">For small labs</p>
                <ul className="list-disc list-inside text-left mt-4">
                  <li>Patient Registration</li>
                  <li>QR Coded Reports</li>
                  <li>Daily Analytics</li>
                  <li>Financial Analysis</li>
                  <li>Worksheet</li>
                  <li>Test Packages</li>
                  <li>Automated Report Sharing on WhatsApp, SMS, and Email</li>
                  <li>Permission Management</li>
                  <li>2 Referral Doctor Logins</li>
                  <li>2 User Accounts</li>
                </ul>
              </div>
            </div>
            <div className="text-center p-4 w-full md:w-1/3 lg:w-1/4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
                <p className="text-2xl text-blue-600 font-bold">Pro</p>
                <p className="text-3xl font-bold mt-2">₹687/mo + GST</p>
                <p className="text-gray-500 mt-1">Billed at ₹ 8,250+ GST every year</p>
                <p className="text-gray-500 mt-1">up-to 12000 patients every year</p>
                <p className="text-gray-500 mt-1">For medium labs</p>
                <ul className="list-disc list-inside text-left mt-4">
                  <li>Everything in Basic Plan</li>
                  <li>Outsourcing</li>
                  <li>Activity Tracking</li>
                  <li>Report Status</li>
                  <li>Add Collection Centers</li>
                  <li>Free Letterhead Designing</li>
                  <li>4 User Accounts</li>
                  <li>4 Referral Doctor Logins</li>
                  <li>Dedicated Support Person</li>
                </ul>
              </div>
            </div>
            <div className="text-center p-4 w-full md:w-1/3 lg:w-1/4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
                <p className="text-2xl text-blue-600 font-bold">Enterprise</p>
                <p className="text-3xl font-bold mt-2">Custom</p>
                <p className="text-gray-500 mt-1">Unlimited patients</p>
                <p className="text-gray-500 mt-1">For big labs/chain of labs</p>
                <ul className="list-disc list-inside text-left mt-4">
                  <li>Everything in Pro Plan</li>
                  <li>Customizable plan according to need</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Customer Support</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Support for every problem
            </p>
            <p className="mt-2 text-xl leading-8 text-gray-600">
              We'd love to help you resolve your problem.
            </p>
          </div>
          <div className="flex justify-start items-center">
            <div className="text-left p-4">
              <p className="text-gray-600">Write to us at</p>
              <p className="text-blue-600 font-semibold">
                <a href="mailto:hello@flabs.in">hello@flabs.in</a>
              </p>
            </div>
            <div className="text-left p-4">
              <p className="text-gray-600">Call us on</p>
              <p className="text-blue-600 font-semibold">
                <a href="tel:+918929759545">+91 8929759545</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>


  );
}
