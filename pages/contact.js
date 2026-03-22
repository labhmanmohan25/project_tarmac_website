import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useState } from "react";
import { SITE_LINKS } from "../lib/siteLinks";
import LazySection from "../components/LazySection";

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
      <SEO
        title="Contact Tarmac | Partner With Our AI Travel App"
        description="Get in touch with the Tarmac team. Reach out for investor relations, location-based brand partnerships, or user feedback on your new travel companion."
        keywords="contact tarmac, tarmac partnership, tarmac investor relations, ai travel app contact, brand partnerships tarmac"
        canonical="/contact"
      />
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="app-title-font app-type-heading text-4xl text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="app-subheading-font app-type-subheading text-lg text-gray-600">
              Have questions about your new AI travel companion, want to partner on location-based brand challenges, or just want to share feedback? Drop us a line — we are building this to navigate the chaos with you.
            </p>
          </div>

          <LazySection minHeight={700}>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="app-type-body-strong text-gray-900">Email</h3>
                    <a
                      href={SITE_LINKS.email}
                      className="app-type-body text-gray-600 hover:text-gray-900"
                    >
                      manmohan.labh@travelwithtarmac.com
                    </a>
                  </div>
                  <div>
                    <h3 className="app-type-body-strong text-gray-900">Instagram</h3>
                    <a
                      href={SITE_LINKS.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="app-type-body text-gray-600 hover:text-gray-900"
                    >
                      @travel.with.tarmac
                    </a>
                  </div>
                  <div>
                    <h3 className="app-type-body-strong text-gray-900">LinkedIn</h3>
                    <a
                      href={SITE_LINKS.linkedinCompany}
                      target="_blank"
                      rel="noreferrer"
                      className="app-type-body text-gray-600 hover:text-gray-900"
                    >
                      Travel With Tarmac
                    </a>
                  </div>
                  <div>
                    <h3 className="app-type-body-strong text-gray-900">
                      Join Waitlist
                    </h3>
                    <div className="flex flex-col gap-2">
                      <a
                        href={SITE_LINKS.waitlistForm}
                        target="_blank"
                        rel="noreferrer"
                        className="app-type-body text-gray-600 hover:text-gray-900"
                      >
                        Open Google Form
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
          </LazySection>
        </div>
      </Layout>
    </>
  );
}
