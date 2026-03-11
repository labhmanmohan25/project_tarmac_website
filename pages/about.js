import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>Tarmac - About</title>
        <meta name="description" content="About Tarmac project" />
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="app-title-font app-type-heading text-4xl text-gray-900 mb-8">
              About Tarmac
            </h1>
            <p className="app-subheading-font app-type-subheading text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Tarmac is a modern web application designed to provide exceptional
              user experiences through cutting-edge technology and thoughtful
              design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="app-type-body text-gray-600 leading-relaxed">
                We strive to create innovative solutions that bridge the gap
                between technology and human needs, delivering products that are
                not only functional but also delightful to use.
              </p>
            </div>

            <div>
              <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
                Technology Stack
              </h2>
              <ul className="app-type-body text-gray-600 space-y-2">
                <li>• Next.js - React framework for production</li>
                <li>• Tailwind CSS - Utility-first CSS framework</li>
                <li>• JavaScript - Modern ES6+ features</li>
                <li>• Responsive Design - Mobile-first approach</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
