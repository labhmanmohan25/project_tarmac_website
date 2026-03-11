import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";
import { SITE_LINKS } from "../lib/siteLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Tarmac - Contact</title>
        <meta name="description" content="Get in touch with Tarmac" />
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="app-title-font text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="app-subheading-font text-lg text-gray-600">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="app-title-font text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a
                    href={SITE_LINKS.email}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    manmohan.labh@travelwithtarmac.com
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Instagram</h3>
                  <a
                    href={SITE_LINKS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    @travel.with.tarmac
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">LinkedIn</h3>
                  <a
                    href={SITE_LINKS.linkedinCompany}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Travel With Tarmac
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Download</h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href={SITE_LINKS.appStore}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      App Store
                    </a>
                    <a
                      href={SITE_LINKS.googlePlay}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
